/* eslint-disable max-len */
import React from 'react';

function MovieList() {
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
    fontSize: '20px',
    fontWeight: 'bold',
    paddingRight: '20%',
  };
  const lastUpdated = {
    fontSize: '14px',
  };
  const user = {
    fontSize: '14px',
    paddingBottom: '5px',
  };
  const across = {
    display: 'flex',
    alignItems: 'bottom',
  };
  const summ = {
    paddingRight: '20%',
    paddingBottom: '5px',
    fontSize: '14px',
  };
  const list = {
    paddingBottom: '5px',
    listStyleType: 'disc',
    marginLeft: '20px',
  };
  return (
    <div style={bigBox}>
      <img src="listcover.png" alt="compilation of four movie posters in a rectangular grid" width="17%" height="auto" />
      <div style={allText}>
        <div style={across}>
          <h1 style={listName}>whoa there&apos;s a lot of fire in here</h1>
          <h1 style={lastUpdated}>Last updated 26 July 2023</h1>
        </div>
        <p style={user}>@milesmorales</p>
        <p style={summ}>this is crazy i did not sign up for this when i watched these movies i thought these were about like chipmunks or something, why is there FIRE 🔥 in her...</p>
        <p>Featured movies:</p>
        <ul style={list}>
          <li>Benediction (2023)</li>
          <li>Chip n Dale (2022)</li>
          <li>Fire Island (2022)</li>
        </ul>
        <p><a href="google.com"><u><b>See the list</b></u></a></p>
      </div>
      <hr />
    </div>
  );
}

export default MovieList;
