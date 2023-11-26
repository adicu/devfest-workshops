import Head from 'next/head';
import { useRouter } from 'next/router';
import OtherProfileWelcome from '@/components/profile/OtherProfileWelcome';
import ProfileMovieTab from '@/components/profile/ProfileMainTab';
import Header from '@/components/shared/Header';

export default function OtherProfiles() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header />
      <div className="px-2 md:px-64">
        <Head>
          <title>
            {id}
            &apos;s Profile
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
