import Head from 'next/head';
import AddMovieForm from '@/components/profile/AddMovieForm';
import MainHeader from '@/components/shared/MainHeader';

export default function AddMovie() {
  return (
    <div>
      <MainHeader />
      <div className="px-2 md:px-64">
        <Head>
          <title>FlickPicks: Add Movie</title>
        </Head>
        <div>
          <AddMovieForm />
        </div>
      </div>
    </div>
  );
}
