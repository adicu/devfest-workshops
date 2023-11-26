import Head from 'next/head';
import AddCollectionForm from '@/components/profile/AddMovieForm/AddCollectionForm';
import Header from '@/components/shared/Header';

export default function AddMovie() {
  return (
    <div>
      <Header />
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
