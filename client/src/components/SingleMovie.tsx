import React from "react";
import Image from "next/image";

type SingleMovieProps = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const SingleMovie = (props: SingleMovieProps) => {
  return (
    <div className="flex bg-white p-4 space-x-4 rounded-lg shadow-md w-full mx-auto">
      <Image
        src={`/assets/${props.image}.png`}
        alt="Spider-Man"
        width={300}
        height={300}
        className="rounded-t-lg w-40 object-cover"
      ></Image>

      <div className="flex-1">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="text-gray-600 text-right">Last updated: {props.date}</p>

        <p className="mt-2">{props.description}</p>

        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">
            Edit entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
