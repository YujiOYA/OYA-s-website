import { Link, useColorModeValue } from '@chakra-ui/react'
import styled from 'styled-components'
import BackButton from './components/BackButton'
import IndexHead from './components/Head'
import Header from './components/Header'
import Section from './components/Section'

const Skills = () => {
  const bg = useColorModeValue("gray.600","gray.100")
  const color = useColorModeValue("white","black")
  return (
    <>
      <IndexHead title="スキル一覧"></IndexHead>
      <Header />
      <Section title="スキル">
        <SUl>
          <li>Mac</li>
          <p>
            大学１年の冬、MacBookを近所のヤマダ電機で購入した。きっかけはかっこよかったから。
            <br />
            音楽制作や画像加工、動画編集を覚えた。
          </p>
          <li>営業</li>
          <p>
            2010年４月から下積みを含め８年間の営業を経験。
            <br />
            関東、東北の酒場を放浪した。
          </p>
          <li>HTML</li>
          <p>
            2018年より学習開始。webサイトの知識は何もなかった。
            <br />
            某サイトの運営を経験した。
          </p>
          <li>CSS</li>
          <p>
            見た目を変えるにはCSSだと知ったのは上記学習開始からしばらく経過してから。
            <br />
            スマホ対応のレイアウトを実装できるようになった。
            <br />
          </p>
          <li>PHP</li>
          <p>
            フォームを使ったwebアンケートや社内システムに関心が向き、2019年ごろから学習開始。
            <br />
            MySQLを触りながら、システム作りに関心が強まった。
            <br />
            個人開発でLaravelを学習中。
            <Link bg={bg} color={color} _hover={{color:"red"}} href="https://www.oyasdiary.ga">日記アプリ</Link>を作った。
          </p>
          <li>JavaScript</li>
          <p>
            なんとなくコピペでやってきたが、きちんと知る必要性を感じ始めた２０２０年ごろから学習開始。
            <br />
            使えるフレームワークはReact。このサイトではNext.jsを使って高速化している。
            <br />
          </p>
          <li>Java</li>
          <p>
            現場で使っているがまだ経験があまりないのでこの言語のことはよくわからない。TypeScriptを経験していたため何となく使えている気がしている。
            SpringBootでのバックエンド開発やAWSとの連携を楽しんでいる。
            <br />
            
            <br />
          </p>
        </SUl>
      </Section>
      <BackButton />
    </>
  )
}
export default Skills

const SUl = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(100px, 1fr) 2fr;
  flex-direction: column;
  padding: 8px 16px;
  margin-left: 5px;
  margin: 0px auto;
  width: 85%;
  max-width: 960px;

  li {
    font-weight: 800;
    font-size: 1.2rem;
    list-style: none;
    vertical-align: middle;
  }
  p {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
`
