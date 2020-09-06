import React from 'react';
import AnswerForm1 from '../../forms/AnswerForm1';

const Question1 = props => {
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

  return (
    <div style={backgroundImage}>
      <h3>질문</h3>
      <AnswerForm1
        answer1={answer1}
        answer2={answer2}
        questionNumber={props.questionNumber}
        setQuestionNumber={props.setQuestionNumber}
      />
    </div>
  );
}

export default Question1;