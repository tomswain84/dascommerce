import '../assets/scss/application.scss';
import '../assets/scss/style.scss';
import '../assets/scss/structure.scss';

import { FC, useEffect, useRef } from 'react'
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
import { useRouter } from 'next/router';
import ScrollToTop from '@components/core/ScrollToTop/ScrollToTop';
import { NextPageContext } from 'next';
import Schema from '@components/core/Schema';

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  let bootstrap = useRef<any>()

  useEffect(() => {
    async function loadBootstrap() {
      // await import bootstrap scripts
      bootstrap.current = await import('bootstrap')
      // initial the tooltips
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.current.Tooltip(tooltipTriggerEl)
      });
    }
    loadBootstrap()

    document.body.classList?.remove('loading')
    if (pageProps.bodyId) {
      document.body.id = pageProps.bodyId
    }
    if (pageProps.bodyClass) {
      document.body.className = pageProps.bodyClass
    }
    if (pageProps.title) {
      document.head.title = pageProps.title
    }
  })

  const { events } = useRouter()

  function closeAllModal() {
    if (!bootstrap.current) return
    const modalList = [].slice.call(document.querySelectorAll('.modal')) as HTMLDivElement[]
    modalList.forEach(function (modalEl) {
      const modalInstance = bootstrap.current.Modal.getInstance(modalEl)
      if (modalInstance && modalInstance._isShown) {
        modalInstance.hide()
      }
    })
  }

  useEffect(() => {
    events.on('routeChangeStart', closeAllModal)
    return () => {
      // unsubscribe on unmount to prevent memory leak
      events.off('routeChangeStart', closeAllModal)
    }
  }, [events])

  return (
    <>
      <Head {...pageProps} />
      <Layout pageProps={pageProps}>
        {/* organization schema */}
        <Schema data={{
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Das Keyboard',
          url: pageProps.fullUrl,
          logo: `${pageProps.baseUrl}/images/logo-das_keyboard-red_white.png`,
          foundingDate: 2005
        }} />
        {/* website schema */}
        <Schema data={{
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: pageProps.title,
          url: pageProps.fullUrl,
        }} />
        <Header />
        <Component {...pageProps} />
        <hr />
        <Footer />
        <ScrollToTop />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const { req, asPath } = ctx;
  let fullUrl, baseUrl, _query;
  if (req) {
    // Server side rendering
    baseUrl = (req.headers.referer?.split('://')[0] || 'https') + '://' + (req.headers.host || 'www.daskeyboard.com');
    fullUrl = baseUrl + req.url
    _query = asPath ? asPath.split('?')?.[1] || '' : ''
  } else {
    // Client side rendering
    baseUrl = window.location.origin;
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
    _query = window.location.search.split('?')?.[1] || ''
  }
  const query = _query.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {} as Record<string, string>)
  return { pageProps: { fullUrl, baseUrl, query } }
}
export default MyApp;
