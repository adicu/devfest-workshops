import React from "react";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

type SingleListProps = {
  username: string;
  title: string;
  description: string;
  movies: string[];
  image: string;
  date: string;
  maxLines?: number;
};

const SingleList = (props: SingleListProps) => {
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
        <div className="flex justify-between">
          <div className="flex-col">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <h2 className="text-lg">
              <Link href={`/profile/${props.username}`}>@{props.username}</Link>
            </h2>
            {props.date && (
              <p className="text-gray-400 text-sm">
                Last updated: {props.date}
              </p>
            )}
          </div>

          <div className="flex items-start justify-center">
            <div className="flex h-8 items-center">
              <button className="bg-white text-blue-500 mx-1 px-1 py-1 rounded hover:bg-blue-500 hover:text-white">
                <FiEdit size={24} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`line-clamp-${
            props.maxLines ? `${props.maxLines}` : `1`
          } overflow-hidden`}
        >
          <p className="mt-2 overflow-ellipsis">{props.description}</p>
          <ul className="list-disc ml-8">
            {props.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between">
            <button className="font-bold px-4 py-2 hover:underline">
              See the list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleList;
