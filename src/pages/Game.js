import React, { Component } from 'react';

class Game extends Component {
  render() {
    const imageStyle = {
      width: '45vw'
    };

    return (
      <div>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
        <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
      </div>
    );
  }
}

export default Game;