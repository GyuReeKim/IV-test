import React, { useState } from 'react';
import Start from '../components/main/Start';
import Map1 from '../components/map1/Map1';

const Game = ({ history }) => {
  const containerStyle = {
    textAlign: 'center',
    width: '100vw'
  };

  const [mapSelection, setMapSelection] = useState(0);

  const [character, setCharacter] = useState([]);
  
  const [character1, setCharacter1] = useState(0);
  const [character2, setCharacter2] = useState(0);
  const [character3, setCharacter3] = useState(0);

  const result = () => {
    console.log('result')
    const scores = {
      'character1': character1,
      'character2': character2,
      'character3': character3,
    }

    let maxV = 0
    for (let value of Object.values(scores)) {
      if (value > maxV) {
        maxV = value
      }
    }
    
    const characters = []

    for (let [key, value] of Object.entries(scores)) {
      if (value === maxV) {
        characters.push(key)
      }
    }
    console.log(characters)

    // route
    const test = '1';
    history.push(`/result/${test}`);
  };

  if (mapSelection === 0) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
        <Start
          setMapSelection={setMapSelection}
        />
      </div>
    );
  } else if (mapSelection === 1) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <h2>맵1</h2>
        {character1} / {character2} / {character3}
        <Map1
          setCharacter={setCharacter}
          setMapSelection={setMapSelection}
          setCharacter1={setCharacter1}
          setCharacter2={setCharacter2}
          setCharacter3={setCharacter3}
        />
      </div>
    );
  } else if (mapSelection === 2) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else if (mapSelection === 3) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else if (mapSelection === 4) {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        <p>이미지</p>
        <p>{mapSelection}</p>
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <h1>시작페이지</h1>
        {character1} / {character2} / {character3}
        <p>{character}</p>
        <p>{mapSelection}</p>
        <p onClick={result}>결과보기</p>
      </div>
    );
  }
}

export default Game;