import React from 'react';
import logo from './logo.svg';
import Main from './pages/Main';
import UploadPage from './pages/UploadPage';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
    	<Main/>
    </div>
  );
}

export default App;
