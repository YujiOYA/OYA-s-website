import { useRouter } from 'next/router'
import styled from 'styled-components'
import BackButton from './components/BackButton'
import Header from './components/Header'

const Skills= ()=>{
    const router = useRouter()
    return(
        <>
        <Header />
        <SUl>
            <li>Mac</li>
            <p>大学１年の冬、MacBookを近所のヤマダ電機で購入した。きっかけはかっこよかったから。
            <br />音楽制作や画像加工、動画編集を覚えた。</p>
            <li>html</li>
            <p>２０１８年に広報担当者として任命後学習開始</p>
            <li>css</li>
            <p>２０１８年に広報担当者として任命後学習開始</p>
            <li>JavaScript</li>
            <p>２０２０年ごろから学習開始</p>
            <li>PHP</li>
            <p>２０２０年ごろから学習開始</p>
        </SUl>
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
    border-radius: 15px;

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