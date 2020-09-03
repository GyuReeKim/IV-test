import React from 'react';
import AnswerForm1 from './AnswerForm1';

const Map1 = () => {
  const test = '/images/test3.jpg';

  const backgroundImage1 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + test})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh',
    padding: '10px'
  };

  const answer1 = "1";
  const answer2 = "2";
  const answer3 = "3";

  return (
    <div style={backgroundImage1}>
      <h2>맵1</h2>
      <h3>질문</h3>
      <AnswerForm1
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
      />
    </div>
  );
}

export default Map1;