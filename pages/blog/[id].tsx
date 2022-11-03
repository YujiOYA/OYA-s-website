import { ParsedUrlQuery } from 'querystring'
// import blocks from "../../src/blocks"
import post from '../../src/post'
import posts from '../../src/posts'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Key, useEffect, useState } from 'react'
import SDiv from './layout'
import { useRouter } from 'next/router'
import Button from '../components/button'
import Header from '../components/Header'
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Flex,
} from '@chakra-ui/react'
import Link from 'next/link'
import styled from 'styled-components'
import Section from '../components/Section'

interface IParams extends ParsedUrlQuery {
  id: string
}

type Title = {
  text: {
    content: String
  }
}

interface Result {
  object: String,
  id: String,
  created_time: String,
  last_edited_time: String,
  created_by: {
    object: String,
    id: String
  },
  last_edited_by: {
    object: String,
    id: String
  },
  cover: null,
  icon: null,
  parent: {
    type: String,
    database_id: String
  },
  archived: Boolean,
  properties: {
    '記事': [Object],
    '公開': [Object],
    path: [Object],
    '画像': [Object],
    '作成日': {
      date: {
        start: String
      }
    },
    'タイトル': {
      title: Array<Title>
    },
    url: String
  }
}

interface Posts {
  Array(any)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { id } = ctx.params as IParams
  // Get the dynamic id
  let page_result = await post(id)
  let { results } = await posts()

  // Fetch the post
  // let { results } = await blocks(id);
  // Get the children
  return {
    props: {
      id,
      post: page_result,
      posts: results,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let { results } = await posts()
  // Get all posts
  return {
    paths: results.map((post) => {
      // Go through every post
      return {
        params: {
          // set a params object with an id in it
          id: post.id,
        },
      }
    }),
    fallback: false,
  }
}
interface Props {
  id: string
  post: any
  posts: [any]
}

const Post: NextPage<Props> = ({ id, post, posts }) => {
  const router = useRouter()
  const notionImgPath = post.properties.path.rich_text[0]?.plain_text
  // const [month, setMonth] = useState([]);
  // const getMonth =(str): void => setMonth(str)
  const arr = []
  const arr2 = []
  const r = []
  const r2 = []
  const ob = {}
  let a = 0
  let b = -1



  for (a; a < posts.length; a++) {
    arr.push(posts[a].properties.作成日.date?.start.substr(0, 7))
    arr2.push(posts[a])
    console.log(arr)

  }
  console.log(arr)
  a = 0
  for (a; a < posts.length; a++) {
    if (arr[a] !== arr[a - 1]) {
      b++
      r2[b] = []
      r2[b].push(arr2[a])
      r.push(r2[b])
    } else {
      r2[b].push(arr2[a])
    }
    // console.log(r2);

  }


  return (
    <>
      <Header />
      {/* {console.log(r2)} */}

      <Section title={post.properties.タイトル.title[0].plain_text}>
        <Head>
          {<title>{post.properties.タイトル.title[0].plain_text}</title>}
        </Head>
        <Flex direction={'column'} align="center" justify="center">
          <Box w="90%">
            <Text fontSize="large">{post.properties.記事.rich_text[0]?.plain_text}</Text>
          </Box>


          {typeof notionImgPath !== 'undefined' && (
            <Image
              src={`/images/${notionImgPath}`}
              alt="blog pic"
              height="400px"
              width="600px"
              objectFit="contain"
            />
          )}
        </Flex>


        {/* 目次 */}


        <Accordion allowToggle>
          {r2.map((result: Array<Result>, index: number) => {
            return (

              <AccordionItem key={index}>
                {/* 1 */}
                <>
                  {/* {arr[ index] !== arr[index - 1] &&( */}
                  <h2>

                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {result[index]?.properties.作成日.date.start.slice(0, 7)}
                      </Box>

                      <AccordionIcon />

                    </AccordionButton>

                  </h2>
                  {/* )} */}
                  {result.map((res: Result, index: number) => {
                    return(
                    <>
                      <AccordionPanel pb={4} key={index}>
                        <Box key={index} fontSize="0.9rem" w="150px">
                          <Link href={`/blog/${res.id}`}>
                            <Text
                              cursor={'pointer'}
                              m={8}
                              textDecoration="underLine"
                              _hover={{ color: '#8dd' }}
                            >
                              <>
                                {res.properties.タイトル.title[0]?.text.content}
                              </>
                            </Text>
                          </Link>
                        </Box>
                      </AccordionPanel>
                    </>
                    )
                  }
                  )}
                </>
              </AccordionItem>
            )
          }
          )}
        </Accordion>
      </Section>

      <Button
        onClick={() => {
          router.back()
        }}
      >
        戻る
      </Button>
    </>
  )
}
export default Post

const SLi = styled.li`
  margin-bottom: 10px;
  width: auto;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: #3aa;
  }
`
