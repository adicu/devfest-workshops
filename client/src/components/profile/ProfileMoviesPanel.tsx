import React from 'react';
import useSWR from 'swr';
import AddMovieButton from './AddMovieButton';
import SingleMovie from '../SingleMovie';
import { apiUrl, fetcher } from '@/lib/apiConfig';
import { formatTimestamp } from '@/lib/utils';
import { Movie } from '@/lib/types';

function ProfileMoviesPanel({ userId }: { userId: string }) {
  const { data: movies, error, isLoading } = useSWR<Movie[]>(`${apiUrl}/users/${userId}/movies`, fetcher);

  if (error) return <div>Failed to load movies.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <AddMovieButton />

      {!movies || movies.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl">You have no movies yet.</p>
          <p className="text-lg">Add some movies to get started!</p>
        </div>
      ) : (
        movies.map((movie) => (
          <SingleMovie
            title={movie.title}
            description={movie.review}
            image={movie.poster_path}
            date={formatTimestamp(movie.created_at)}
          />
        )))}
    </div>
  );
}

export default ProfileMoviesPanel;
