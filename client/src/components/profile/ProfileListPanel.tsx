import React from 'react';
import useSWR from 'swr';
import AddListButton from './AddListButton';
import SingleList from '../SingleList';
import { apiUrl, fetcher } from '@/lib/apiConfig';
import { Movie, MovieList } from '@/lib/types';
import { formatTimestamp } from '@/lib/utils';

function ProfileListPanel({ userId }: { userId: string }) {
  const { data: movieLists, error, isLoading } = useSWR<MovieList[]>(`${apiUrl}/users/${userId}/lists`, fetcher);
  const { data: user, error: error2, isLoading: isLoading2 } = useSWR(`${apiUrl}/users/${userId}`, fetcher);
  const { data: movies, error: error3, isLoading: isLoading3 } = useSWR<Movie[]>(`${apiUrl}/users/${userId}/movies`, fetcher);

  if (error || error2 || error3) return <div>Failed to load lists.</div>;
  if (isLoading || isLoading2 || isLoading3) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <AddListButton />

      {movieLists?.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl">You have no lists yet.</p>
          <p className="text-lg">Add some lists to get started!</p>
        </div>
      ) : (
        movieLists?.map((list: MovieList) => (
          <SingleList
            username={user.name}
            title={list.name}
            description={list.description}
            image="movielist"
            // image={list.image}
            date={formatTimestamp(list.created_at)}
            movies={list.movie_ids
              // eslint-disable-next-line no-underscore-dangle
              .map((movieId) => {
                const movie = movies!.find((movie) => movie._id === movieId)!;
                return `${movie.title} (${movie.release_date.substring(0, 4)})`;
              })}
          />
        ))
      )}

      <SingleList
        username="tylertaewook"
        title="💣  Explosive movies "
        description="Action, explosions, and drama -- these movies are FIRE 🔥 , both metaphorically and literally. Hav..."
        image="movielist"
        date="26 Jun 2022"
        movies={[
          'Benediction (2023)',
          'Chip n Dale (2022)',
          'Fire Island (2022)',
        ]}
      />
      <SingleList
        username="john-doe"
        title="🔥  Fire movies "
        description="Action, explosions, and drama -- these movies are FIRE 🔥 , both metaphorically and literally. Hav..."
        image="movielist"
        date="26 Jun 2022"
        movies={[
          'Benediction (2023)',
          'Chip n Dale (2022)',
          'Fire Island (2022)',
        ]}
      />
    </div>
  );
}

export default ProfileListPanel;
