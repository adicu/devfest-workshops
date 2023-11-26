import React from 'react';

function Header() {
  return (
    <div className="flex">
      <div className="sm:basis-1/4 flex">
        <div className="lg:basis-1/6 basis-1/4">
          <img src="logo.png" alt="FlickPicks logo" height="auto" className="pr-5 w-100 self-center" />
        </div>
        <div className="lg:basis-5/6 basis:2/3 flex">
          <h1 className="self-center lg:text-3xl text-xl text-black font-bold">Flick</h1>
          <h1 className="self-center lg:text-3xl text-xl text-green-500 font-bold">Picks</h1>
        </div>
      </div>
      <div className="sm:basis-3/4 flex justify-end">
        <button type="button" className="self-center float-right bg-black justify-end text-white text-xs px-6 sm:px-4 py-2 sm:py-1 rounded-full no-underline font-bold inline-block mr-4">Log In</button>
        <button type="button" className="self-center float-right bg-green-500 justify-end text-white text-xs px-8 sm:px-6 py-2 sm:py-1 rounded-full no-underline font-bold inline-block">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
