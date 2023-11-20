/* eslint-disable max-len */
import React from 'react';

function MovieList() {
  return (
    <div className="flex flex-wrap text-14 pb-20">
      <div className="basis-1/4">
        <img src="listcover.png" alt="compilation of four movie posters in a rectangular grid" />
      </div>
      <div className="basis-3/4 lg:pl-5 xs:pl-3 sm:pl-3 md:pl-3">
        <div className="flex items-bottom">
          <h1 className="text-lg font-bold pr-2">whoa there&apos;s a lot of fire in here</h1>
          <h1 className="text-sm justify-self-end self-center">Last updated 26 July 2023</h1>
        </div>
        <p className="text-sm pb-1">@milesmorales</p>
        <p className="pr-20 pb-5 text-sm">this is crazy i did not sign up for this when i watched these movies i thought these were about like chipmunks or something, why is there FIRE 🔥 in her...</p>
        <p>Featured movies:</p>
        <ul className="pb-5 list-disc ml-20">
          <li>Benediction (2023)</li>
          <li>Chip n Dale (2022)</li>
          <li>Fire Island (2022)</li>
        </ul>
        <p><a href="google.com"><u><b>See the list</b></u></a></p>
      </div>
      <hr />
    </div>
  );
}

export default MovieList;
