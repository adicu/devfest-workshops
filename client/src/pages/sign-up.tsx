import { SignUp } from '@clerk/nextjs';
import Header from '@/components/shared/Header';

export default function Signup() {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-24">
        <SignUp />
      </div>
    </div>
  );
}
