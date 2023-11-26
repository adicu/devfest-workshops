/* eslint-disable max-len */
import React from 'react';

function Movie() {
  return (
    <div className="flex text-base pb-20">
      <div className="basis-1/4 lg:w-full">
        <img src="omgitsspiderman.png" alt="poster for Spiderman: Into the Spiderverse" />
      </div>
      <div className="basis-3/4 pl-3">
        <h1 className="font-bold text-sm">Spider-man: Into the Spider-verse (2019)</h1>
        <div className="flex items-bottom">
          <div className="basis-1/2">
            <p className="text-xs">@milesmorales</p>
          </div>
          <div className="basis-1/2">
            <h1 className="text-xs">13 min ago</h1>
          </div>
        </div>
        <p className="pr-20% pb-5 text-sm">i mean personally i thought this was a little unrealistic, cause imagine getting bit by a spider and becoming spider-man...</p>
      </div>
    </div>
  );
}

export default Movie;
