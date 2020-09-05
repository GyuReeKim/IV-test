import React, { useState } from 'react';
import Start from '../components/main/Start';
import Map1 from '../components/map1/Map1';

const Game = () => {
  const containerStyle = {
    textAlign: 'center',
    width: '100vw'
  };

  const [mapSelection, setMapSelection] = useState(0);

  if (mapSelection === 1) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <h2>맵1</h2>
        <Map1 />
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