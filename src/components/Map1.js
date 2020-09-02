import React from 'react';
import Question1 from './Question1';

const Map1 = () => {
  const test = '/images/test3.jpg'

  const backgroundImage1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + test})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh'
  };

  return (
    <div style={backgroundImage1}>
      <h1>맵1</h1>
      <p>질문</p>
      <Question1 />
    </div>
  );
}

export default Map1;