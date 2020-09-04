import React, { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';

const Map1 = () => {
  const [questionNumber, setQuestionNumber] = useState(1);

  if (questionNumber === 1) {
    return (
      <div>
        <Question1
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    );
  } else if (questionNumber === 2) {
    return (
      <div>
        <Question2 />
      </div>
    )
  }
}

export default Map1;