import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body style={{ fontFamily: 'Poppins' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
