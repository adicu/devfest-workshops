import React from 'react';
import AddMovieButton from './AddMovieButton';
import SingleMovie from '../SingleMovie';

function ProfileMoviesPanel() {
  return (
    <div className="space-y-6">
      <AddMovieButton />
      <SingleMovie
        title="Spider-Man: Into the Spider-Verse (2019)"
        description={
          "O. M. G. this has gotta be the best movie I've ever seen. Spider-Man presents a profoundly aesthetic and deeply moving portrait to the condition of modernity and the attempt to reach beyond the mundane Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        image="/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
        date="26 Jun 2022"
      />
      <SingleMovie
        title="Tenet"
        description={"btw if you haven't seen this you must;"}
        image="/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg"
        date="26 Jun 2022"
      />
    </div>
  );
}

export default ProfileMoviesPanel;
