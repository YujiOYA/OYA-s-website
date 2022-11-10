import posts from '../../src/posts'
import Link from 'next/link'
import Head from 'next/head'
import { NextPage, GetServerSideProps, GetStaticProps } from 'next'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import BackButton from '../components/BackButton'
import Section from '../components/Section'
import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import { rgbToHex } from '@mui/material'

export const getStaticProps: GetStaticProps = async () => {
  // Get the posts
  let { results } = await posts()
  // Return the result
  return {
    props: {
      posts: results,
    },
  }
}

interface Props {
  [x: string]: any
  posts: any
}
// interface Props {
//     posts: {
//         object:string,
//         id: string,
//         created_time: string,
//         last_edited_time: string,
//         created_by: {
//             id: string,
//             object: string,
//         },
//         last_edited_by:{
//             id: string,
//             object: string,
//         },
//         cover?: null,
//         icon?: null,
//         parent: {
//             database_id: string,
//             type: string,
//         }
//         archived: boolean,
//         properties: {
//             タイトル: {id: string, type: string, title?: string},
//             作成日: {id: string, type: string, date?: null},
//             公開: {id: string, type: string, checkbox: boolean},
//             記事: {id: string, type: string, rich_text: []},
//         url: string
//     }
//     }}
const arr=[]
const Home: NextPage<Props> = (props) => {
  props.posts.sort(function(a: any, b: any) {
    return (
      a.properties.作成日.date.start.substr(0,10) < b.properties.作成日.date.start.substr(0,10) ? 1 : -1 
      )
  });
  props.posts.map((r:Props, i:Number)=>{
    
    console.log(r.properties.作成日.date.start.substr(0,10));
    
  })
  return (
    <>
      <Head>
        <title>おやつブログ</title>
      </Head>
      <Header />

      <Section title="日記">
                    <Flex p="1" direction={"column"} align="center" justify='center'>
                {props.posts.map((result: any, index: Key) => {
                  return (
                        <Box key={index} p='1' textAlign='left' width="180px">
                          <Link href={`/blog/${result.id}`} >
                            <Text
                              textAlign="left"
                              fontSize= '1.4rem'
                              textDecoration= 'underLine'
                              _hover={{color: '#3aa'}}
                            >
                              ○{result.properties.タイトル.title[0].plain_text}
                            </Text>
                          </Link>
                        </Box>
                  )
                })}
              </Flex>
      </Section>
      <BackButton />
    </>
  )
}
export default Home