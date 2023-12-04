type Movie = {
  _id: string;
  title: string;
  review: string;
  poster_path: string;
  creator_id: string;
  created_at: string;
  updated_at: string;
  tmdb_id: string;
  release_date: string;
};

type MovieList = {
  _id: string;
  name: string;
  description: string;
  creator_id: string;
  movie_ids: string[];

  created_at: string;
  updated_at: string;
};

export type { Movie, MovieList };
