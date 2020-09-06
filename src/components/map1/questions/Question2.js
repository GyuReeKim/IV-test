import React from 'react';
import AnswerForm2 from '../../forms/AnswerForm2';

const Question2 = props => {
  const test = '/images/test3.jpg';

  const backgroundImage = {
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
    <div style={backgroundImage}>
      <h3>질문</h3>
      <AnswerForm2
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        questionNumber={props.questionNumber}
        setQuestionNumber={props.setQuestionNumber}
      />
    </div>
  );
}

export default Question2;