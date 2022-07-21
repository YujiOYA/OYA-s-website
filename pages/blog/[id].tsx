import { ParsedUrlQuery } from 'querystring'
// import blocks from "../../src/blocks"
import post from '../../src/post'
import posts from '../../src/posts'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Key } from 'react'
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

  return (
    <>
      <Header />

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

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  6月
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
              {posts.map((result: any, index: Key) => {
                {
                  console.log(result)
                }
                return (
                  <Box key={index} fontSize="0.9rem" w="150px">
                    <Link href={`/blog/${result.id}`}>
                      <Text
                        cursor={'pointer'}
                        m={8}
                        textDecoration="underLine"
                        _hover={{ color: '#8dd' }}
                      >
                        {result.properties.タイトル.title[0].plain_text}
                      </Text>
                    </Link>
                  </Box>
                )
              })}
            </AccordionPanel>
          </AccordionItem>
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
