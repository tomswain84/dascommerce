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

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
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
      <Head title={pageProps.title} />
      <Layout pageProps={pageProps}>
        <Header />
        <Component {...pageProps} />
        <hr />
        <Footer />
      </Layout>
    </>
  )
}
