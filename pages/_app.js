import Layout from '../components/Layout';
import { SessionProvider, useSession } from 'next-auth/react';
import { initialState, reducer, StoreProvider } from '../context/Store';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider initialState={initialState} reducer={reducer}>
        {Component.auth ? (
          <Auth>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Auth>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </StoreProvider>
    </SessionProvider>
  );
}
function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login_required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
