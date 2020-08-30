import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Game extends Component {
  render() {
    const containerStyle = {
      textAlign: 'center'
    };

    const imageStyle = {
      width: '95%'
    };

    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <Grid container justify="center">
          <Grid item xs={6}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
          <Grid item xs={6}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
          <Grid item xs={6}>
            <img src={process.env.PUBLIC_URL + '/images/test.png'} alt="test" style={imageStyle} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Game;