import React from 'react';

function Header() {
  return (
    <div className="flex">
      <div className="basis-1/2 flex">
        <div className="basis-1/6">
          <img src="logo.png" alt="FlickPicks logo" height="auto" className="pr-5 w-100" />
        </div>
        <h1 className="self-center text-3xl text-black font-bold">Flick</h1>
        <h1 className="self-center text-3xl text-green-500 font-bold">Picks</h1>
      </div>
      <div className="basis-1/2">
        <button type="button" className="self-center float-right bg-green-500 justify-end text-white text-base px-8 py-2 rounded-full no-underline font-bold inline-block">Sign Up</button>
        <button type="button" className="self-center float-right bg-black justify-end text-white text-base px-6 py-2 rounded-full no-underline font-bold inline-block mr-4">Log In</button>
      </div>
    </div>
  );
}

export default Header;
