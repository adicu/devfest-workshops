import Head from 'next/head';
import { useRouter } from 'next/router';
import MainHeader from '@/components/shared/MainHeader';
import OtherProfileWelcome from '@/components/profile/OtherProfileWelcome';
import ProfileMovieTab from '@/components/profile/ProfileMainTab';

export default function OtherProfiles() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <MainHeader />
      <div className="px-2 md:px-64">
        <Head>
          <title>
            {id}
            's Profile
          </title>
        </Head>
        <div>
          <OtherProfileWelcome name={id} />
          <ProfileMovieTab />
        </div>
      </div>
    </div>
  );
}
