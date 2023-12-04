import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import OtherProfileWelcome from '@/components/profile/OtherProfileWelcome';
import ProfileMovieTab from '@/components/profile/ProfileMainTab';
import Header from '@/components/shared/Header';
import { apiUrl, fetcher } from '@/lib/apiConfig';

export default function OtherProfiles() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`${apiUrl}/users/${id}`, fetcher);

  if (error || typeof id !== 'string' || !data) return <div>Failed to load user.</div>;
  if (isLoading) return <div>Loading...</div>;

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
          <OtherProfileWelcome name={data.name} />
          <ProfileMovieTab userId={id} />
        </div>
      </div>
    </div>
  );
}
