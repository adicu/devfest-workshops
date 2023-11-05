import React from "react";

type WelcomeContentProps = {
  name: string;
};

const WelcomeContent = (props: WelcomeContentProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold">Welcome back, {props.name}.</h1>
      <p>
        This page is your home for all things you. Make your movie lists, see
        what you’ve liked, and get personalized recommendations for new movies.{" "}
      </p>
    </div>
  );
};

export default WelcomeContent;
