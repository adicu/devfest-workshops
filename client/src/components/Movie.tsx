/* eslint-disable max-len */
import React from 'react';

function Movie() {
  const bigBox = {
    display: 'flex',
    fontSize: '14px',
    paddingBottom: '20px',
  };
  const allText = {
    flex: 1,
    paddingLeft: '20px',
  };
  const listName = {
    fontSize: '15px',
    fontWeight: 'bold',
  };
  const lastUpdated = {
    fontSize: '12px',
  };
  const user = {
    fontSize: '12px',
    paddingBottom: '5px',
    paddingRight: '20%',
  };
  const across = {
    display: 'flex',
    alignItems: 'bottom',
  };
  const review = {
    paddingRight: '20%',
    paddingBottom: '5px',
    fontSize: '14px',
  };
  const line = {
    display: 'block',
    color: 'black',
  };
  return (
    <div style={bigBox}>
      <img src="omgitsspiderman.png" alt="poster for Spiderman: Into the Spiderverse" width="30%" height="auto" />
      <div style={allText}>
        <h1 style={listName}>Spider-man: Into the Spider-verse (2019)</h1>
        <div style={across}>
          <p style={user}>@milesmorales</p>
          <h1 style={lastUpdated}>13 min ago</h1>
        </div>
        <p style={review}>i mean personally i thought this was a little unrealistic, cause imagine getting bit by a spider and becoming spider-man...</p>
      </div>
      <hr style={line} />
    </div>
  );
}

export default Movie;
