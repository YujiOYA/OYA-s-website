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
      <title>{props.title}</title>
    </Head>
  )
}
export default IndexHead
