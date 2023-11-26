import Head from 'next/head';
import AddCollectionForm from '@/components/profile/AddMovieForm/AddCollectionForm';
import MainHeader from '@/components/shared/MainHeader';

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
