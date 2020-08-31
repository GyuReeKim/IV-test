import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Game extends Component {
  render() {
    const containerStyle = {
      textAlign: 'center'
    };

    const itemStyle = {
      margin: '2vw',
      maxWidth: '45vw',
      maxHeight: '25vh',
    };
    
    const imageStyle = {
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      border: '1px solid black',
      borderRadius: '10px'
    };

    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
          <Grid item style={itemStyle}>
            <img src={process.env.PUBLIC_URL + '/images/test2.jpg'} alt="test2" style={imageStyle} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
          <Grid item style={itemStyle}>
            <img src={process.env.PUBLIC_URL + '/images/test2.jpg'} alt="test2" style={imageStyle} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Game;