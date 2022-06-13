import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

//Debajo de la etiqueta de html podemos agregar la etiqueta description, viewport, robots, etc que luego se compartiran en TODA la aplicacion

export default MyDocument;
