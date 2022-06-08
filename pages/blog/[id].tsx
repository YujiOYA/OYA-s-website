import { ParsedUrlQuery } from 'querystring';
import { blocks, post, posts } from "./contents"
import { NextPage,GetStaticProps,GetStaticPaths  } from "next"
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components'
import SDiv from './layout';

import Header from '../components/Header'
interface IParams extends ParsedUrlQuery {
    id: string
 }

export const getStaticProps: GetStaticProps = async (ctx) => {
    let { id } = ctx.params as IParams; 
    // Get the dynamic id
    let page_result = await post(id); 
    // Fetch the post
    let { results } = await blocks(id); 
    // Get the children
    return {
      props: {
        id,
        post: page_result,
        blocks: results
      }
    }
 }
 export const getStaticPaths: GetStaticPaths = async () => {
    let { results } = await posts(); 
    // Get all posts
    return {
      paths: results.map((post) => { 
        // Go through every post
        return {
          params: { 
            // set a params object with an id in it
            id: post.id
          }
        }
      }),
      fallback: false
    }
 } 
 interface Props {
    id: string,
    post: any,
    blocks: [any]
 }
export const Posts = posts()


 const Post:NextPage<Props> = ({id,post,blocks}) => {
     console.log(Posts);
     
     const notionImgPath = post.properties.画像.files[0].file.url

    return (
      <>
      <Header />

      <SDiv>
        <Head>
          { <title>
            {post.properties.タイトル.title[0].plain_text}
          </title> }
        </Head>
        <h1>{post.properties.タイトル.title[0].plain_text}</h1>
        <div>
          {
            post.properties.記事.rich_text[0].plain_text
          }
        </div>
        <Image src={notionImgPath} alt='blog pic' height="400px"  width="600px" objectFit='contain' />

      </SDiv>
      </>
    )
 }
 export default Post

