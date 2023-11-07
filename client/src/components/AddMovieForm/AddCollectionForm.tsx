import { useState } from "react";
import { MovieCollectionItem } from "./types";
import AddMovieForm from "./AddMovieForm";
import SingleMovie from "../SingleMovie";

export default function AddCollectionForm() {
  const [name, setName] = useState<string>("");
  const [movies, setMovies] = useState<MovieCollectionItem[]>();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const addMovie = (newMovie: MovieCollectionItem) => {
    if (movies) {
      setMovies([...movies, newMovie]);
    } else {
      setMovies([newMovie]);
    }
    closeOverlay();
  };

  const deleteMovie = (index: number) => {
    console.log("deleting movie at index", index);
    if (movies) {
      setMovies(movies.filter((_, i) => i !== index));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const submitList = () => {
    // TODO: show collection object
    console.log(movies);
    alert("Clicked SaveList!");
  };

  // TODO: make form changes setName and setReview.
  // TODO: SingleMovie should take a edit callback

  return (
    <div className="flex justify-center">
      <div className="pt-4 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Create a list</h1>
          <p className="text-xl">Your fans can&apos;t wait to see it</p>
        </div>

        <div className="w-full block mt-4 relative">
          <input
            type="text"
            value={name}
            placeholder="List name"
            onChange={handleNameChange}
            className="w-full border-[1px] border-black rounded-xl px-4 py-2 text-xl md:min-w-[500px] placeholder:text-[#DFDFDF]"
          />
        </div>

        <div className="space-y-6 p-4 w-full">
          {movies &&
            movies.map((m, index) => (
              <div className="w-full">
                <SingleMovie
                  key={index}
                  title={m.movie.title}
                  description={m.notes}
                  image={m.movie.poster_path}
                  date={""}
                  onDeleteMovie={() => deleteMovie(index)}
                  width={20}
                  maxLines={2}
                />
              </div>
            ))}
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={openOverlay}
            style={{
              borderColor: "#5DAE50",
              color: "#5DAE50",
              backgroundColor: "white",
              borderWidth: "2px",
            }}
            className="py-3 px-4 text-xl rounded-xl"
          >
            Add a movie
          </button>

          <button
            type="button"
            onClick={(_) => submitList()}
            className="py-3 px-4 bg-[#5DAE50] text-white text-xl rounded-xl disabled:bg-gray-400"
            disabled={!name || !movies || movies.length === 0}
          >
            Save list
          </button>
        </div>

        {isOverlayOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl">
              <div className="text-right">
                <button onClick={closeOverlay} className="text-gray-500">
                  Cancel
                </button>
              </div>
              <AddMovieForm onAddMovie={addMovie} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
