import { Client } from '@notionhq/client';


const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

export async function posts() {
  const myPosts = await notion.databases.query({
    database_id: `${process.env.BLOG_INDEX_ID}`,
  });
  return myPosts;
}

export async function post(id: string) {
  const myPost = await notion.pages.retrieve({
    page_id: id,
  });
  return myPost;
}

export async function blocks(id: string) {
  const myBlocks = await notion.blocks.children.list({
    block_id: id
  });
  return myBlocks;
}