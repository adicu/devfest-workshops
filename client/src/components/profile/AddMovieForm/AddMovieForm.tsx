import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import Image from 'next/image';
import { Movie, MovieCollectionItem } from './types';
import MoviesAPI from './MoviesAPI';

type AddMovieFormProps = {
  onAddMovie: (newMovie: MovieCollectionItem) => void;
};

export default function AddMovieForm({
  onAddMovie = () => {},
}: AddMovieFormProps) {
  const [name, setName] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [movie, setMovie] = useState<Movie>();
  const [results, setResults] = useState<Movie[]>();
  const [showResults, setShowResults] = useState<boolean>();

  const doSearch = async (query: string) => {
    const res = await MoviesAPI.search(query);
    setResults(res);
  };

  const selectMovie = (m: Movie) => {
    setMovie(m);
    setName(`${m.title} (${m.release_date.slice(0, 4)})`);
    setShowResults(false);
  };

  const debouncedSearch = useCallback(
    debounce((nextValue) => doSearch(nextValue), 500),
    [],
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    debouncedSearch(value);
  };

  const submit = () => {
    console.log(movie, review);
    alert('Clicked Add to Profile!');
  };

  // TODO: make form changes setName and setReview.

  return (
    <div className="flex justify-center">
      <div className="pt-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Add another movie</h1>
          <p className="text-xl">Your fans can&apos;t wait to see it</p>
        </div>

        <div className="block mt-4 relative">
          <input
            type="text"
            value={name}
            placeholder="Movie name..."
            onChange={handleNameChange}
            onFocus={(_) => setShowResults(true)}
            className=" w-full border-[1px] border-black rounded-xl px-4 py-2 text-xl md:min-w-[500px] placeholder:text-[#DFDFDF]"
          />
          {showResults && results && results.length > 0 && (
            <div className="absolute left-0 right-0 w-full bg-white border-2 max-h-96 overflow-y-scroll">
              {results?.map((m) => (
                <button
                  type="button"
                  className="block w-full p-5 border-b-2 hover:bg-gray-200 transition-colors"
                  onClick={(_) => selectMovie(m)}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-32 relative">
                      <Image
                        className="object-contain"
                        fill
                        src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                        alt={`Poster for ${m.title}`}
                      />
                    </div>
                    <div className="flex flex-grow flex-col justify-between items-start text-left">
                      <h1 className="font-bold">
                        {m.title}
                        {' '}
                        (
                        {m.release_date.slice(0, 4)}
                        )
                      </h1>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://themoviedb.org/movie/${m.id}`}
                        className="text-blue-400 text-sm"
                      >
                        Open on themoviedb.org &#x2197;
                      </a>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="block mt-4">
          <textarea
            placeholder="Your review..."
            onChange={(e) => setReview(e.target.value)}
            className="border-[1px] border-black rounded-xl px-4 py-2 text-xl w-full md:min-w-[500px] min-h-[300px] placeholder:text-[#DFDFDF]"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={(_) => {
              if (movie) {
                onAddMovie({ movie, notes: review });
              }
            }}
            className="py-3 px-4 bg-[#5DAE50] text-white text-xl rounded-xl disabled:bg-gray-400"
            disabled={!movie || !review}
          >
            Add to Profile
          </button>
        </div>
      </div>
    </div>
  );
}
