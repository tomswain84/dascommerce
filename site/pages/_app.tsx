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
    async function loadBootstrap() {
      // await import bootstrap scripts
      const bootstrap = await import('bootstrap')
      // initial the tooltips
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      });
    }
    loadBootstrap()

    document.body.classList?.remove('loading')
    if (pageProps.bodyId) {
      document.body.id = pageProps.bodyId
    }
    if (pageProps.bodyClass) {
      document.body.classList?.add(pageProps.bodyClass.split(' '))
    }
  })

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
