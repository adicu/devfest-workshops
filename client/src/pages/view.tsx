import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import { useUser } from "@clerk/nextjs";
import ProfileMovieTab from "@/components/ProfileMainTab";
import WelcomeContent from "@/components/WelcomeContent";
import SingleList from "@/components/SingleList";
import CollectionHeader from "@/components/CollectionHeader";
import SingleMovie from "@/components/SingleMovie";

export default function Homepage() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <MainHeader />
      <CollectionHeader
        username={"tylertaewook"}
        title={"💣  Explosive movies "}
        description={
          "Action, explosions, and drama -- these movies are FIRE 🔥 , both metaphorically and literally. Hav..."
        }
        image={"movielist"}
        date={"26 Jun 2022"}
        movies={[
          "Benediction (2023)",
          "Chip n Dale (2022)",
          "Fire Island (2022)",
        ]}
      />
      <div className="px-2 md:px-64">
        <Head>
          <title>View Collections</title>
        </Head>
        <div>
          <div className="space-y-6 mt-6">
            <SingleMovie
              title="Spider-Man: Into the Spider-Verse (2019)"
              description={
                "O. M. G. this has gotta be the best movie I've ever seen. Spider-Man presents a profoundly aesthetic and deeply moving portrait to the condition of modernity and the attempt to reach beyond the mundane Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              image="/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              date="26 Jun 2022"
            />
            <SingleMovie
              title="Tenet"
              description={"btw if you haven't seen this you must;"}
              image="/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg"
              date="26 Jun 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
