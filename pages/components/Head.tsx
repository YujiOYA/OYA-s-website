import Head from 'next/head'
import * as React from 'react'

type Props={
  title: string,
}

const IndexHead = (props:Props) => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=yes"
      />

      <meta name="author" content="OYA" />
      <meta name="Description" content="OYAのポートフォリオ" />
      <meta name="Keywords" content="ポートフォリオ,転職活動,ジョブチェンジ" />
      <meta httpEquiv="imagetoolbar" content="no" />

      <meta charSet="utf-8" />
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
      <title>{props.title}</title>
    </Head>
  )
}
export default IndexHead
