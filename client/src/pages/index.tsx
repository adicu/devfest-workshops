import Head from 'next/head';
import Banner from '@/components/Banner';
import Body from '@/components/Body';
import Header from '@/components/Header';
import MainHeader from "@/components/MainHeader";


export default function Homepage() {
  return (
    <div>
      <MainHeader />
      <Head>
        <title>FlickPicks</title>
      </Head>
      <Header />
      <Banner />
      <Body />
    </div>
  );
}
