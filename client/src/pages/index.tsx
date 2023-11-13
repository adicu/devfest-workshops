import Head from "next/head";
import MainHeader from "@/components/MainHeader";

export default function Homepage() {
  return (
    <div>
      <MainHeader />
      <Head>
        <title>Next Template</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Next.js Template</h1>
        <p>Edit `pages/index.tsx` to see your changes!</p>
      </div>
    </div>
  );
}
