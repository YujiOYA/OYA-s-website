import notion from "./contents"

export default async function post(id: string) {
    const myPost = await notion.pages.retrieve({
      page_id: id,
    });
    return myPost;
  }