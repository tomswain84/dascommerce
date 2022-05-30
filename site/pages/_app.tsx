import '../assets/scss/application.scss';
import '../assets/scss/style.scss';
import '../assets/scss/structure.scss';

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from '@components/core/Head';
import Header from '@components/core/Header';
import Footer from '@components/core/Footer';

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
        <div className='container'>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Layout>
    </>
  )
}
