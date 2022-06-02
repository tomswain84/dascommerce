import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class DasDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps

    return (
      <Html>
        <Head />
        <body id={pageProps.bodyId} className={pageProps.bodyClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
