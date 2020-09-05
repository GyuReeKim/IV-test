import React from 'react';
import Grid from '@material-ui/core/Grid';

const Start = props => {
  const itemStyle = {
    margin: '2vw',
    maxWidth: '45vw',
    maxHeight: '25vh'
  };
  
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    border: '1px solid black',
    borderRadius: '10px'
  };

  const selectMap = (n) => {
    props.setMapSelection(n)
  };

  return (
    <div>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <img
            src={process.env.PUBLIC_URL + '/images/test.png'}
            alt="test"
            style={imageStyle}
            onClick={() => selectMap(1)}
          />
        </Grid>
        <Grid item style={itemStyle}>
          <img
            src={process.env.PUBLIC_URL + '/images/test2.jpg'}
            alt="test2"
            style={imageStyle}
            onClick={() => selectMap(2)}
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <img
            src={process.env.PUBLIC_URL + '/images/test.png'}
            alt="test"
            style={imageStyle}
            onClick={() => selectMap(3)}
          />
        </Grid>
        <Grid item style={itemStyle}>
          <img
            src={process.env.PUBLIC_URL + '/images/test2.jpg'}
            alt="test2"
            style={imageStyle}
            onClick={() => selectMap(4)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Start;