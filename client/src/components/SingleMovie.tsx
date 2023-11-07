import React from "react";
import Image from "next/image";
import { FiEdit, FiTrash2 } from "react-icons/fi";

type SingleMovieProps = {
  title: string;
  description: string;
  image: string;
  date?: string;
  onDeleteMovie?: () => void;
  width?: number;
  maxLines?: number;
};

const SingleMovie = (props: SingleMovieProps) => {
  return (
    <div className="flex bg-white p-4 space-x-4 rounded-lg shadow-md w-full mx-auto">
      <Image
        className={`rounded-t-lg object-cover h-full ${
          props.width ? `w-${props.width}` : "w-40"
        }`}
        src={`https://image.tmdb.org/t/p/w200${props.image}`}
        alt={`Poster for ${props.title}`}
        width={300}
        height={300}
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex-col">
            <h2 className="text-xl font-bold">{props.title}</h2>
            {props.date && (
              <p className="text-gray-400 text-sm">
                Last updated: {props.date}
              </p>
            )}
          </div>

          <div className="flex items-start justify-center">
            {props.onDeleteMovie && (
              <div className="flex h-8 items-center">
                <button
                  className="bg-white text-red-500 mx-1 px-1 py-1 rounded hover:bg-red-600 hover:text-white"
                  onClick={props.onDeleteMovie}
                >
                  <FiTrash2 size={24} />
                </button>
              </div>
            )}
            <div className="flex h-8 items-center">
              <button className="bg-white text-blue-500 mx-1 px-1 py-1 rounded hover:bg-blue-500 hover:text-white">
                <FiEdit size={24} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`line-clamp-${
            props.maxLines ? `${props.maxLines}` : `6`
          } overflow-hidden`}
        >
          <p className="mt-2 overflow-ellipsis">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
