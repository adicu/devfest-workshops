import React from "react";

const AddMovieButton = () => {
  const handleAddMovie = () => {
    alert("Add movie button clicked!");
  };
  return (
    <button
      onClick={handleAddMovie}
      className="flex items-center w-full space-x-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition ease-in-out duration-150"
    >
      <div className="bg-gray-200 p-4 rounded-full">
        <span className="text-xl font-semibold text-gray-500">+</span>
      </div>
      <span className="text-gray-600 font-medium">Add another movie...</span>
    </button>
  );
};

export default AddMovieButton;
