import { SignUp } from '@clerk/nextjs';
import MainHeader from '@/components/shared/MainHeader';

export default function Signup() {
  return (
    <div>
      <MainHeader />
      <div className="flex justify-center py-24">
        <SignUp />
      </div>
    </div>
  );
}
