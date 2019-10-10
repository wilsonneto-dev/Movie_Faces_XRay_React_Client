import React from 'react';

import VideoSource from './components/VideoDource';
import './ui-struct.scss';

function App() {
  return (
    <div className="App">
      <div className="video">
        <VideoSource />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
