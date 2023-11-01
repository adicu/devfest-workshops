import React from "react";
import AddMovieButton from "./AddMovieButton";
import SingleMovie from "./SingleMovie";

const ProfileMoviesPanel = () => {
  return (
    <div className="space-y-6">
      <AddMovieButton />
      <SingleMovie
        title={"Spider-Man: Into the Spider-Verse (2019)"}
        description={
          "O. M. G. this has gotta be the best movie I've ever seen. Spider-Man presents a profoundly aesthetic and deeply moving portrait to the condition of modernity and the attempt to reach beyond the mun..."
        }
        image={"spiderman"}
        date={"26 Jun 2022"}
      />
      <SingleMovie
        title={"Tenet"}
        description={"btw if you haven't seen this you must;"}
        image={"tenet"}
        date={"26 Jun 2022"}
      />
    </div>
  );
};

export default ProfileMoviesPanel;
