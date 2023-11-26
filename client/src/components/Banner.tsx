/* eslint-disable max-len */
import React from 'react';

function Banner() {
  return (
    <div className="bg-white text-black p-20 lg:flex items-center">
      <div className="lg:flex items-center">
        <div className="lg:basis-2/3 lg:pr-20">
          <div className="lg:pr-20 w-100">
            <h1 className="text-24 font-bold">Meet your next favorite movie.</h1>
            <p className="text-16 pb-5">The best discoveries come from people who share your taste. FlickPicks lets you make and share lists of movies with like-minded moviegoers from around the world. </p>
          </div>
          <div className="flex items-center">
            <button type="button" className="flex-none text-sm bg-green-500 text-white py-2 px-4 rounded-2xl no-underline font-bold inline">Join the Community</button>
            <p className="text-sm ml-5 text-center font-bold underline">or browse community lists</p>
          </div>
        </div>
        <div className="hidden lg:block lg:basis-1/3">
          <img src="oldguyfromup.jpg" alt="the old guy from up sitting in a sofa with his walker standing next to him" className="w-100 mr-20" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
