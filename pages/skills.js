import { useRouter } from 'next/router'
import styled from 'styled-components'
import BackButton from './components/BackButton'
import Header from './components/Header'

const Skills= ()=>{
    const router = useRouter()
    return(
        <>
        <Header />
        <div id="p-2" className='content_group'>
        <p className='sub_title'>
          スキル
        </p>
        <SUl>
            <li>Mac</li>
            <p>大学１年の冬、MacBookを近所のヤマダ電機で購入した。きっかけはかっこよかったから。
            <br />音楽制作や画像加工、動画編集を覚えた。</p>
            <li>営業</li>
            <p>2010年４月から下積みを含め８年間の営業を経験。<br />関東、東北の酒場を放浪した。</p>
            <li>HTML</li>
            <p>2018年より広報担当者に任命され、学習開始（webサイトの知識は何もなかった）。
            <br />自社コーポレートサイトの運営を開始。</p>
            <li>CSS</li>
            <p>見た目を変えるにはCSSだと知ったのは上記学習開始からしばらく経過してから。
            <br />スマホ対応のレイアウトを実装できるようになった。</p>
            <li>PHP</li>
            <p>フォームを使ったwebアンケートや社内システムに関心が向き、2019年ごろから学習開始。<br />
            MySQLを触りながら、システム作りに関心が強まった。<br />
            個人開発でLaravelを学習。<a href='https://www.oyasdiary.ga'>日記アプリ</a>を作った。</p>
            <li>JavaScript</li>
            <p>なんとなくコピペでやってきたが、きちんと知る必要性を感じ始めた２０２０年ごろから学習開始。<br />
            このサイトでも使っている。<br />
            </p>
        </SUl>
        </div>
        <BackButton />
        </>
    )
}
export default Skills

const SUl = styled.ul`
    display: grid;
    gap: 10px;
    grid-template-columns: minmax(100px,1fr) 2fr ;
    flex-direction: column;
    padding: 8px 16px;
    margin-left: 5px;
    background: #fff;
    border-radius: 30px;
    margin: 0px auto;
    width: 85%;
    max-width: 960px;

    li{
        font-weight: 800;
        font-size: 1.2rem;
        list-style: none;
        vertical-align: middle;
    }
    p{
        color: #555;
        font-size: 0.9rem;
        margin-bottom: 16px;
    }
`