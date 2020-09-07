import React, { useState } from 'react';
import Question1 from './questions/Question1';
import Question2 from './questions/Question2';

const Map1 = props => {
  const [questionNumber, setQuestionNumber] = useState(1);

  if (questionNumber === 1) {
    return (
      <div>
        <Question1
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setCharacter1={props.setCharacter1}
          setCharacter2={props.setCharacter2}
          setCharacter3={props.setCharacter3}
        />
      </div>
    );
  } else if (questionNumber === 2) {
    return (
      <div>
        <Question2
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setCharacter1={props.setCharacter1}
          setCharacter2={props.setCharacter2}
          setCharacter3={props.setCharacter3}
          setMapSelection={props.setMapSelection}
        />
      </div>
    );
  }
}

export default Map1;