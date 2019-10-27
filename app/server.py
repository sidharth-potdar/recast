from flask import Flask, request
from flask_cors import CORS
from PIL import Image

import torch
import numpy as np
import cv2
from torchvision import transforms
from uuid import uuid4
import json

from compressor import DeepAutoencoder

import boto3
import subprocess

access_key = 'AKIAJHJWVEFPEN47A7WA'
secret_key = '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'

s3 = boto3.resource('s3',
                        aws_access_key_id=access_key,
                        aws_secret_access_key=secret_key
                    )

model = DeepAutoencoder()
model = torch.load("model.pth", map_location="cpu")

app = Flask(__name__)
CORS(app)

def preprocess(path, bucketname, old_name):
    transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.Resize((256, 256)),
            transforms.ToTensor()
        ])

    cap = cv2.VideoCapture(path)
    frames = []

    while cap.isOpened():
        ret, frame = cap.read()

        if frame is None:
            break

        frames.append(transform(frame))

    frames = torch.stack(frames)

    tr = transforms.ToPILImage()
    fps = 25
    name = "test.mp4"

    for i in range(len(frames)):
        image = tr(frames[i, :, :, :])
        image.save("%07d.jpg" % i)
    subprocess.call(["ffmpeg","-y","-r",str(fps),"-i", "%07d.jpg","-vcodec","libx264", "-qscale","5", "-r", str(fps), "data/"+name])
    s3.meta.client.upload_file("data/" + name, bucketname, "staging/" + old_name.replace("old/", ""))

    return frames


def compress(video):
    tr = transforms.ToPILImage()
    output = torch.squeeze(model(video)).detach()
    fps = 25
    name = str(uuid4()) + ".mp4"

    for i in range(len(output)):
        image = tr(output[i, :, :, :])
        image.save("%07d.jpg" % i)
    subprocess.call(["ffmpeg","-y","-r",str(fps),"-i", "%07d.jpg","-vcodec","libx264", "-qscale","5", "-r", str(fps), "data/"+name])

    return name

@app.route("/test", methods=["POST"])
def test():
    if request.method == "POST":
        bucketname = request.args.get("bucketname")
        filepath = request.args.get("filepath")
        local = "data/temp.mp4"

        s3.Bucket(bucketname).download_file(filepath, local)
        print("Downloaded file")
        frames = preprocess(local, bucketname, filepath)
        print("Preprocessed video")
        new_filepath = compress(frames)
        print("Compressed and wrote video")

        s3.meta.client.upload_file("data/" + new_filepath, bucketname, "new/" + filepath.replace("old/", ""))
        print("Uploaded video")

        return json.dumps({"path": "new/" + filepath.replace("old/", "")})

if __name__ == '__main__':
    app.run(debug=True)
