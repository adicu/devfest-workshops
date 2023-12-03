import React from 'react';

type OtherProfileWelcomeProps = {
  name: string;
};

function OtherProfileWelcome({ name }: OtherProfileWelcomeProps) {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-bold">
        Welcome to
        {name}
        &apos;s page :)
      </h1>
    </div>
  );
}

export default OtherProfileWelcome;
