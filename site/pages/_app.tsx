import '../assets/scss/application.scss';
import '../assets/scss/style.scss';
import '../assets/scss/structure.scss';

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from '@components/core/Head';
import Header from '@components/core/Header';
import Footer from '@components/core/Footer';

// font awesome
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(fab, fas);

import '@fortawesome/fontawesome-svg-core/styles.css';

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Header />
        <Component {...pageProps} />
        <hr />
        <Footer />
      </Layout>
    </>
  )
}
