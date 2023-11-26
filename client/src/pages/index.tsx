import Head from 'next/head';
import Banner from '@/components/home/Banner';
import Body from '@/components/home/Body';
import Header from '@/components/shared/Header';

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>FlickPicks</title>
      </Head>
      <Header />
      <Banner />
      <Body />
    </div>
  );
}
