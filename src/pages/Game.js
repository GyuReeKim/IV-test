import React, { useState } from 'react';
import Start from '../components/Start';

const Game = () => {
  const containerStyle = {
    textAlign: 'center',
    width: '100vw'
  };

  const test = '/images/test3.jpg'

  const backgroundImage1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + test})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  const [mapSelection, setMapSelection] = useState(0);

  if (mapSelection === 1) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <div style={backgroundImage1}>          
          <p>이미지</p>
          <p>{mapSelection}</p>
        </div>
      </div>
    );
  } else if (mapSelection === 2) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else if (mapSelection === 3) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else if (mapSelection === 4) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
        <Start
          mapSelection={mapSelection}
          setMapSelection={setMapSelection}
        />
      </div>
    );
  }
}

export default Game;