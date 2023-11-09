/* eslint-disable max-len */
import React from 'react';
import MovieList from './MovieList';
import Movie from './Movie';

function Body() {
  const bigBox = {
    display: 'flex',
    padding: '20px',
  };
  const communityLists = {
    flex: 2,
  };
  const subtitle = {
    fontSize: '20px',
    fontWeight: 'bold',
    paddingBottom: '15px',
  };
  const recents = {
    width: '30%',
  };
  return (
    <div style={bigBox}>
      <div style={communityLists}>
        <h1 style={subtitle}>Community Movie Lists</h1>
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
      <div style={recents}>
        <h1 style={subtitle}>Recent Reviews</h1>
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

export default Body;
