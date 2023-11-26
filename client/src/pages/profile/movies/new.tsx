import Head from 'next/head';
import AddMovieForm from '@/components/profile/AddMovieForm';
import Header from '@/components/shared/Header';

export default function AddMovie() {
  return (
    <div>
      <Header />
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
