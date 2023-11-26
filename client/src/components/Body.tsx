/* eslint-disable max-len */
import React from 'react';
import MovieList from './MovieList';
import Movie from './Movie';

function Body() {
  return (
    <div className="lg:flex p-20">
      <div className="lg:basis-3/4">
        <h1 className="text-xl font-bold mb-2">Community Movie Lists</h1>
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
      <div className="lg:basis-1/4 lg:pl-3">
        <h1 className="text-xl font-bold mb-2">Recent Reviews</h1>
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

export default Body;
