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
      <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/sake_1f376.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/sake_1f376.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/sake_1f376.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body  className="bgLP">

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}