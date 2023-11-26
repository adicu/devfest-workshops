import React from 'react';
import { useRouter } from 'next/router';

function AddMovieButton() {
  const router = useRouter();

  const handleAddMovie = () => {
    router.push('/profile/movies/new');
  };
  return (
    <button
      type="button"
      onClick={handleAddMovie}
      className="flex items-center w-full space-x-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition ease-in-out duration-150"
    >
      <div className="bg-gray-200 p-4 rounded-full">
        <span className="text-xl font-semibold text-gray-500">+</span>
      </div>
      <span className="text-gray-600 font-medium">Add another movie...</span>
    </button>
  );
}

export default AddMovieButton;
