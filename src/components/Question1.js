import React from 'react';
import AnswerForm1 from './AnswerForm1';

const Question1 = () => {
  const answer1 = "1"
  const answer2 = "2"
  const answer3 = "3"

  return (
    <div>
      <h3>질문</h3>
      <AnswerForm1
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
      />
    </div>
  );
}

export default Question1;