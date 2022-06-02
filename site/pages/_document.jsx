import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class DasDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps

    return (
      <Html>
        <Head />
        <body id={pageProps.bodyId} className={pageProps.bodyClass}>
          <script
            async
            src="https://na-library.klarnaservices.com/lib.js"
            data-client-id="acfb1e1e-8879-5051-bc94-5c9a72e324fc"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
