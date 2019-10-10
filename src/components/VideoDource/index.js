import React, { createRef } from 'react';

import './style.scss';
import iconFile from '../../assets/ic-file-upload.png';

export default props => {
  const fileInput = createRef();
  const videoElement = createRef();

  const fileChange = () => {
    const url = URL.createObjectURL(fileInput.current.files[0]);
    videoElement.current.src = url;
  };

  return (
    <>
      <div className="source">
        <div class="video-wrapper">
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
              <img src={iconFile} />
            </label>
          </div>
        </center>
      </div>
    </>
  );
};
