import { SignIn } from '@clerk/nextjs';

export default function Signin() {
  return (
    <div>
      <div className="flex justify-center py-24">
        <SignIn />
      </div>
    </div>
  );
}
