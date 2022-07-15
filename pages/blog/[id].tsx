import { ParsedUrlQuery } from 'querystring';
import blocks from "../../src/blocks"
import post from "../../src/post"
import posts from "../../src/posts"
import { NextPage,GetStaticProps,GetStaticPaths  } from "next"
import Image from 'next/image';
import Head from 'next/head';
import SDiv from './layout';
import { useRouter } from "next/router";
import Button from '../components/button';
import Header from '../components/Header';
import { Text } from '@chakra-ui/react';


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


 const Post:NextPage<Props> = ({id,post,blocks}) => {

  const router = useRouter();
  const notionImgPath = post.properties.path.rich_text[0]?.plain_text
  
     
    return (
      <>
      <Header />

      <SDiv>
        <Head>
          { <title>
            {post.properties.タイトル.title[0].plain_text}
          </title> }
        </Head>
        <Text as='h1' fontWeight={700} fontSize='2rem' color='#f8e' textShadow='2px 2px 2px 2px rgba(0, 0, 0, 1)'>
          {post.properties.タイトル.title[0].plain_text}
        </Text>
        <p>
        {post.properties.記事.rich_text[0]?.plain_text}
        </p>
        

        {typeof notionImgPath !== "undefined" 
        && <Image src={`/images/${notionImgPath}`} alt='blog pic' height="400px"  width="600px" objectFit='contain' />
      }
      </SDiv>
      <Button onClick={()=>{router.back()}}>戻る</Button>
      </>
    )
 }
 export default Post

