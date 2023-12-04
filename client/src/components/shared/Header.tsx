import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-4">
      <Link href="/">
        <div className="flex">
          <div className="">
            <img src="/logo.png" alt="FlickPicks logo" width="auto" className="pr-5 h-12 self-center" />
          </div>
          <div className="flex items-center">
            <h1 className="text-2xl text-black font-bold">Flick</h1>
            <h1 className="text-2xl text-green-500 font-bold">Picks</h1>
          </div>
        </div>
      </Link>
      <div className="flex justify-end">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            userProfileUrl="/profile"
            userProfileMode="navigation"
            appearance={{
              elements: {
                userButtonTrigger: {
                  '&:focus': {
                    boxShadow: '#7857FF 0px 0px 0px 3px',
                  },
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="self-center float-right bg-black justify-end text-white text-xs px-6 sm:px-4 py-2 sm:py-1 rounded-full no-underline font-bold inline-block mr-4">Log In</Link>
          <Link href="/sign-up" type="button" className="self-center float-right bg-green-500 justify-end text-white text-xs px-8 sm:px-6 py-2 sm:py-1 rounded-full no-underline font-bold inline-block">Sign Up</Link>
        </SignedOut>

      </div>
    </div>
  );
}

export default Header;
