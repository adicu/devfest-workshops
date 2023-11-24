import React from "react";

type OtherProfileWelcome = {
  name: string;
};

const OtherProfileWelcome = (props: OtherProfileWelcome) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold">Welcome to {props.name}'s page :)</h1>
    </div>
  );
};

export default OtherProfileWelcome;
