import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="">
        <Head >
          <link rel="icon" href="/static/images/favicon.ico" />
        </Head>
        <body className="dark:bg-gray-900 dark:text-gray-50 lg:text-lg md:text-md">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument