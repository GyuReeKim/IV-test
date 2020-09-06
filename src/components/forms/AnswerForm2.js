import React from 'react';

const AnswerForm2 = props => {
  const nextQuestion = () => {
    props.setQuestionNumber(questionNumber => questionNumber+1)
  };

  return (
    <div>
      <p onClick={nextQuestion}>{props.answer1}</p>
      <p onClick={nextQuestion}>{props.answer2}</p>
      <p onClick={nextQuestion}>{props.answer3}</p>
    </div>
  );
}

export default AnswerForm2;