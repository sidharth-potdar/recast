import torch
import numpy as np
import cv2
from torchvision import transforms
from uuid import uuid4
import json

from compressor import DeepAutoencoder

import boto3

access_key = 'AKIAJHJWVEFPEN47A7WA'
secret_key = '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'

s3 = boto3.resource('s3',
                        aws_access_key_id=access_key,
                        aws_secret_access_key=secret_key
                    )

model = DeepAutoencoder()
model = torch.load("model.pth", map_location="cpu")


def preprocess(path):
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

        frames.append(transform(frame) if transform else frame)

    frames = torch.stack(frames)
    return frames


def compress(video):
    output = np.uint8(torch.squeeze(model(video)).detach().numpy())
    name = str(uuid4()) + ".avi"

    fourcc = cv2.VideoWriter_fourcc(*'DIVX')
    out = cv2.VideoWriter("data/" + name, fourcc, 16, (256,256))
    print(out.get(0))
    print(out.get(1))
    print(out.get(2))
    print(out.get(3))
    print(out.get(4))

    for f in output:
        out.write(cv2.cvtColor(f, cv2.COLOR_RGB2BGR))
        cv2.imshow("Frame", f)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    out.release()

    return name

def test():
    bucketname = "hackgtbucket-hackgtaws"
    filepath = "public/output.mp4"
    local = "data/temp.mp4"

    s3.Bucket(bucketname).download_file(filepath, local)
    print("Downloaded file")
    frames = preprocess(local)
    print("Preprocessed video")
    new_filepath = compress(frames)
    print("Compressed and wrote video")

    s3.meta.client.upload_file("data/" + new_filepath, bucketname, "new/" + new_filepath)
    print("Uploaded video")

    return json.dumps({"path": "new/" + new_filepath})

if __name__ == '__main__':
    test()
