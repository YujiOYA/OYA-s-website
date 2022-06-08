import {notion} from "./contents"

export default async function blocks(id: string) {
    const myBlocks = await notion.blocks.children.list({
      block_id: id
    });
    return myBlocks;
  }