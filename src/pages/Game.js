import React from 'react';
import Start from '../components/Start';

const Game = () => {
  const containerStyle = {
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1>시작페이지</h1>
      <p>이미지</p>
      <Start />
    </div>
  );
}

export default Game;