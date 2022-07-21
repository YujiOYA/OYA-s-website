import notion from './contents'

export default async function blocks(id: string) {
  const Notion = notion
  const myBlocks = await Notion.blocks.children.list({
    block_id: id,
  })
  return myBlocks
}
