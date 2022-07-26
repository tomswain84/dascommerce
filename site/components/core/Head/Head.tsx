/* eslint-disable jsx-a11y/alt-text */
import NextHead from 'next/head'
import { VFC } from 'react'

interface Props {
  title: string,
  description?: string
  image?: string
}
const Head: VFC<Props> = (props) => {
  const title = props.title || 'Das Keyboard - The Utimate Mechanical Keyboard Experience for Badasses'
  const description = props.description || 'Das Keyboard high-performance mechanical keyboards for baddass overachievers.'
  const image = props.image || '/images/logo-das_keyboard-red_white.png'
  return (
    <NextHead>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

      {/* Owl Carousel */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" /> */}

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700;900&family=Roboto:wght@100;200;300;400&display=swap" rel="stylesheet" />

      {/* FontAwesome */}
      {/* <script src="https://kit.fontawesome.com/5ad74c9225.js" crossOrigin="anonymous"></script> */}

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="p:domain_verify" content="1d5fcae9d234c67ba84e7149e2c11ad9" />
      <meta name="google-site-verification" content="ap0Jh9EmNP8gNXeAEh0nvLEF9TApmJMVFWGDU2gkyJI" />
      <meta name="google-site-verification" content="2znsxQwyd6AqEH5vl6QpLSjn-LSWXNxCzgyqHyO5SZ8" />
      <meta name="google-site-verification" content="nI0xzbfh3uoeJDL0Dx0L6N1VHgENBXgqjJ_DXSEXEsk" />
      <meta name="google-site-verification" content="HC_JM5c5AxtNSEl_0g1z3ucjfJl6Wlyba83xmICev3E" />
      <meta name="author" content="www.daskeyboard.com" />

      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/> */}

      {/* <!-- Facebook Pixel Code --> */}
      <script dangerouslySetInnerHTML={{
        __html: `
        !function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '256866578299678');
            fbq('track', 'PageView');
            `}} />

      <noscript>
        <img height="1" width="1" src="https://www.facebook.com/tr?id=256866578299678&ev=PageView&noscript=1" />
      </noscript>
      {/* <!-- End Facebook Pixel Code --> */}
    </NextHead>
  )
}
export default Head