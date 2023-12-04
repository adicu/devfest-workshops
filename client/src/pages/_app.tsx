import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ClerkProvider afterSignInUrl="/profile">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
