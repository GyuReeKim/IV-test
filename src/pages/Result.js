import React from 'react';
import Character1 from '../components/characters/Character1';
import Character2 from '../components/characters/Character2';
import Character3 from '../components/characters/Character3';

const Result = ({ match }) => {
  const character = match.params.name;
  
  if (character === '1') {
    return (
      <div>
        <h1>Result</h1>
        <Character1 />
      </div>
    );
  } else if (character === '2') {
    return (
      <div>
        <h1>Result</h1>
        <Character2 />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Result</h1>
        <Character3 />
      </div>
    );
  }
}

export default Result;