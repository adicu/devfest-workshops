import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                {" "}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h14M1 6h14M1 11h7"
                />{" "}
              </svg>
            </button>
            <a href="/" className="flex mr-4">
              <img
                src="/assets/logo.png"
                className="mr-3 h-8"
                alt="FlickPicks Logo"
              />
            </a>
          </div>
          <div className="flex items-center lg:order-2">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                userProfileUrl="/profile"
                userProfileMode="navigation"
                appearance={{
                  elements: {
                    userButtonTrigger: {
                      "&:focus": {
                        boxShadow: "#7857FF 0px 0px 0px 3px",
                      },
                    },
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <Link href="sign-in">Sign In</Link>
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
