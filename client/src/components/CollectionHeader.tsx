import React from 'react';
import Image from 'next/image';
import { FiEdit } from 'react-icons/fi';

type CollectionHeaderProps = {
  username: string;
  title: string;
  description: string;
  movies: string[];
  image: string;
  date: string;
  maxLines?: number;
};

function CollectionHeader(props: CollectionHeaderProps) {
  return (
    <div className="flex bg-[#282626] space-x-4 text-white py-12 px-32 shadow-md w-full">
      <Image
        src={`/assets/${props.image}.png`}
        alt="Spider-Man"
        width={300}
        height={300}
        className="rounded-t-lg w-40 object-cover"
      />

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex-col space-y-4">
            <h2 className="text-5xl font-bold">{props.title}</h2>
            <h2 className="text-lg">
              @
              {props.username}
            </h2>
            {props.date && (
              <p className="text-gray-400 text-sm">
                Last updated:
                {' '}
                {props.date}
              </p>
            )}
          </div>
        </div>
        <div
          className={`line-clamp-${
            props.maxLines ? `${props.maxLines}` : '1'
          } overflow-hidden`}
        >
          <p className="mt-2 overflow-ellipsis">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CollectionHeader;
