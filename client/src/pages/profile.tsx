import Head from 'next/head';
import MainHeader from '@/components/MainHeader';
import ProfileMovieTab from '@/components/ProfileMainTab';
import WelcomeContent from '@/components/WelcomeContent';

export default function Homepage() {
  return (
    <div>
      <MainHeader />
      <div className="px-2 md:px-64">
        <Head>
          <title>Profile</title>
        </Head>
        <div>
          <WelcomeContent name="Tyler" />
          <ProfileMovieTab />
        </div>
      </div>
    </div>
  );
}
