/* eslint-disable max-len */
import React from 'react';
import useSWR from 'swr';
import Movie from '../Movie';
import { apiUrl, fetcher } from '@/lib/apiConfig';
import { MovieList } from '@/lib/types';
import SingleList from '../SingleList';

function Body() {
  const { data: movieLists, error, isLoading } = useSWR<MovieList[]>(`${apiUrl}/movies/all`, fetcher);

  // TODO: load the movie lists.

  return (
    <div className="lg:flex p-20">
      <div className="lg:basis-3/4">
        <h1 className="text-xl font-bold mb-2">Community Movie Lists</h1>
        {error && <div>Failed to load lists.</div>}
        {isLoading && <div>Loading...</div>}
        {/* {movieLists?.map((list: MovieList) => (

            } */}
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
