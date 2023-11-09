import React from 'react';

function Header() {
  const bigBox = {
    display: 'flex',
  };
  const title1 = {
    fontSize: '30px',
    color: 'black',
    fontWeight: 'bold',
  };
  const title2 = {
    fontSize: '30px',
    color: 'green',
    fontWeight: 'bold',
    marginRight: '65%',
  };
  const logo = {
    paddingRight: '15px',
  };
  const login = {
    backgroundColor: 'black',
    fontSize: '18px',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline',
    marginRight: '10px',
  };
  const signUp = {
    backgroundColor: 'green',
    fontSize: '18px',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'inline',
  };
  return (
    <div style={bigBox}>
      <img src="logo.png" alt="FlickPicks logo" width="5%" height="auto" style={logo} />
      <h1 style={title1}>Flick</h1>
      <h1 style={title2}>Picks</h1>
      <button type="button" style={login}>Log In</button>
      <button type="button" style={signUp}>Sign Up</button>
    </div>
  );
}

export default Header;
