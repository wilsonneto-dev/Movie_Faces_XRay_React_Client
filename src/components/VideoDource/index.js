import React, { createRef } from 'react';

import * as faceapi from 'face-api.js';

import './style.scss';
import iconFile from '../../assets/ic-file-upload.png';

export default props => {
  const fileInput = createRef();
  const videoElement = createRef();

  const fileChange = () => {
    const url = URL.createObjectURL(fileInput.current.files[0]);
    videoElement.current.src = url;
  };

  const initFaceApis = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    const detections = await faceapi.detectAllFaces(videoElement.current);
    console.log(detections);
  };

  return (
    <>
      <div className="source">
        <div className="video-wrapper">
          <video
            ref={videoElement}
            type="video/mp4"
            controls
            loop
            autoPlay
          ></video>
        </div>
        <center>
          <div className="filePick">
            <label>
              <input ref={fileInput} onChange={fileChange} type="file" />
              <img src={iconFile} alt="insira um vídeo" />
            </label>
          </div>
          <button onClick={initFaceApis}>Teste</button>
        </center>
      </div>
    </>
  );
};
