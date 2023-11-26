import Head from 'next/head';
import { useUser } from '@clerk/nextjs';
import Header from '@/components/shared/Header';
import ProfileMovieTab from '@/components/profile/ProfileMainTab';
import WelcomeContent from '@/components/WelcomeContent';

export default function Homepage() {
  const { user } = useUser();
  return (
    <div>
      <Header />
      <div className="px-2 md:px-64">
        <Head>
          <title>Profile</title>
        </Head>
        <div>
          <WelcomeContent name={user?.firstName} />
          <ProfileMovieTab />
        </div>
      </div>
    </div>
  );
}
