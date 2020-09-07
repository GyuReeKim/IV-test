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

  const setAnswer = (n) => {
    if (n === 1) {
      props.setCharacter1(c => c+10)
    } else if (n === 2) {
      props.setCharacter2(c => c+10)
    } else {
      props.setCharacter3(c => c+10)
    }
    // 모든 질문에 답 했을 경우
    props.setMapSelection(5)
  };

  return (
    <div style={backgroundImage}>
      <h3>질문</h3>
      <AnswerForm2
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        setQuestionNumber={props.setQuestionNumber}
        setAnswer={setAnswer}
      />
    </div>
  );
}

export default Question2;