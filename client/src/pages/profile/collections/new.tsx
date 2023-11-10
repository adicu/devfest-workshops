import Head from "next/head";
import AddCollectionForm from "@/components/AddMovieForm/AddCollectionForm";
import MainHeader from "@/components/MainHeader";

export default function AddMovie() {
  return (
    <div>
      <MainHeader />
      <div className="px-2 md:px-64">
        <Head>
          <title>FlickPicks: Add Collection</title>
        </Head>
        <div>
          <AddCollectionForm />
        </div>
      </div>
    </div>
  );
}
