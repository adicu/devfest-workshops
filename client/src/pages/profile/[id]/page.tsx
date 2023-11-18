import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import { useUser } from "@clerk/nextjs";
import ProfileMovieTab from "@/components/ProfileMainTab";
import WelcomeContent from "@/components/WelcomeContent";

export default function OtherProfiles({ id }: { id: string }) {
  return (
    <div>
      <MainHeader />
      <div className="px-2 md:px-64">
        <Head>
          <title>{id}'s Profile</title>
        </Head>
        <div>
          <ProfileMovieTab />
        </div>
      </div>
    </div>
  );
}
