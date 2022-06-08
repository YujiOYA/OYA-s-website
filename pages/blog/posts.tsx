import notion from "./contents"


export default async function posts() {
    const myPosts = await notion.databases.query({
      database_id: `${process.env.BLOG_INDEX_ID}`,
    });
    return myPosts;
  }
  