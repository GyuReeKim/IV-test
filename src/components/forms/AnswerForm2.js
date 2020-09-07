import React from 'react';

const AnswerForm2 = props => {
  const nextQuestion1 = () => {
    props.setAnswer(1)
    props.setQuestionNumber(q => q+1)
  };

  const nextQuestion2 = () => {
    props.setAnswer(2)
    props.setQuestionNumber(q => q+1)
  };

  const nextQuestion3 = () => {
    props.setAnswer(3)
    props.setQuestionNumber(q => q+1)
  };

  return (
    <div>
      <p onClick={nextQuestion1}>{props.answer1}</p>
      <p onClick={nextQuestion2}>{props.answer2}</p>
      <p onClick={nextQuestion3}>{props.answer3}</p>
    </div>
  );
}

export default AnswerForm2;