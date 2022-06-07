import NextHead from 'next/head'
import { VFC } from 'react'

interface Props {
  title: string
}
const Head: VFC<Props> = ({ title }) => {
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

      <title>{title || 'Das Keyboard - The Utimate Mechanical Keyboard Experience for Badasses'}</title>
    </NextHead>
  )
}
export default Head