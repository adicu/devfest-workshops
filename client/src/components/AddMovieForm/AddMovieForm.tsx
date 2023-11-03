import { useState } from 'react';

export default function AddMovieForm() {
  const [name, setName] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const submit = () => {
    console.log(name, review);
    alert('Added to profile!');
  };

  // TODO: make form changes setName and setReview.

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Add another movie</h1>
          <p className="text-xl">Your fans can&apos;t wait to see it</p>
        </div>
        <input
          type="text"
          placeholder="Movie name..."
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] border-black rounded-xl px-4 py-2 text-xl md:min-w-[500px] placeholder:text-[#DFDFDF]"
        />
        <textarea
          placeholder="Your review..."
          onChange={(e) => setReview(e.target.value)}
          className="border-[1px] border-black rounded-xl px-4 py-2 text-xl md:min-w-[500px] min-h-[300px] placeholder:text-[#DFDFDF]"
        />
        <div className="flex justify-center">
          <button
            type="button"
            onClick={(_) => submit()}
            className="py-3 px-4 bg-[#5DAE50] text-white text-xl rounded-xl disabled:bg-gray-400"
            disabled={!name || !review}
          >
            Add to Profile

          </button>
        </div>
      </div>
    </div>
  );
}
