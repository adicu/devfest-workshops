import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import { useUser } from "@clerk/nextjs";
import ProfileMovieTab from "@/components/ProfileMainTab";
import WelcomeContent from "@/components/WelcomeContent";

export default function Homepage() {
  const { user } = useUser();
  return (
    <div>
      <MainHeader />
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
