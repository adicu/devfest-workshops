import { SignIn } from '@clerk/nextjs';
import MainHeader from '@/components/shared/MainHeader';

export default function Signin() {
  return (
    <div>
      <MainHeader />
      <div className="flex justify-center py-24">
        <SignIn />
      </div>
    </div>
  );
}
