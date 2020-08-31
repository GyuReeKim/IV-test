import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => {
  const decorationStyle = {
    textDecoration: 'none'
  };
  
  return (
    <div>
      <h1>메인페이지</h1>
      <Link to="/game" style={decorationStyle}>
        <Button variant="contained">start</Button>
      </Link>
    </div>
  );
}

export default Home;