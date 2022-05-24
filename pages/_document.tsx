import Document,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import React from 'react';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document  {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@800&family=Reggae+One&family=Sawarabi+Mincho&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet" />
        </Head>

        <body  className="bgLP">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}