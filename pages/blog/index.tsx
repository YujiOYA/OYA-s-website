import {posts}  from "./contents";
import Link from 'next/link';
import Head from "next/head";
import { NextPage, GetServerSideProps } from "next";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import styled from "styled-components";
import Header from "../components/Header"
import SDiv from "./layout"

export const getServerSideProps:GetServerSideProps =async ()=> {
    // Get the posts
    let { results } = await posts();
    // Return the result
    return {
      props: {
        posts: results
      }
    }
}

interface Props {
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
//             公開: {id: string, type: string, checkbox: false},
//             記事: {id: string, type: string, rich_text: []},
//         url: string
//     }
//     }}


const Home: NextPage<Props> = (props) => {

    
    return (
      <>
      <Header />
      <SDiv >
      <Head>
        <title>Latest posts</title>
      </Head>

      <main >
        <h1 >
        Latest posts
        </h1>
        {
          props.posts.map((result:any,index: Key) => {
            if(typeof result.properties.タイトル.title[0].plain_text !== "undefined"){
          return (
            <div  key={index}>
              <ul>
                <SLi>
            <Link href={`/blog/${result.id}`} >
              <p>タイトル：
                {result.properties.タイトル.title[0].plain_text }
              </p>
            </Link>
            </SLi>

            </ul>
            </div>
            )
          }
          })
        }
      </main>
 

      </SDiv>

    </>
    )
 }
export default Home

const SLi =styled.li`
margin-bottom: 10px;
width: auto;
display: inline-block;
cursor: pointer;
&:hover{
  color:#3aa;
}
`