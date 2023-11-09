import Head from 'next/head';
import Banner from '@/components/Banner';
import Body from '@/components/Body';
import Header from '@/components/Header';

export default function Homepage() {
  return (
    <div className="px-2 md:px-36 py-20">
      <Head>
        <title>FlickPicks</title>
      </Head>
      <Header />
      <Banner />
      <Body />
    </div>
  );
}
