import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import Hamburger from './humberger'

const Navi = () => {
  const route = useRouter()
  const path = route.asPath
  const [first, setfirst] = useState(false)
  const handleFirst = () => {
    setfirst(!first)
    console.log(first)
  }

  return (
    <>
      <Hamburger onClick={handleFirst} type={first} />
      <Sdiv className={first ? 'get' : ''}>
        <Link href="/">
          <a className={path == '/' ? 'ison' : ''}>Home</a>
        </Link>
        <Link href="/about/">
          <a className={path == '/about/' ? 'ison' : ''}>About OYA</a>
        </Link>
        <Link href="/blog/">
          <a className={path.includes('/blog/') ? 'ison' : ''}>Blog</a>
        </Link>
        <Link href="/skills/">
          <a className={path == '/skills/' ? 'ison' : ''}>Skills</a>
        </Link>
        <Link href="/episodes/">
          <a className={path == '/episodes/' ? 'ison' : ''}>Episodes</a>
        </Link>
        <Link href="/qa/">
          <a className={path == '/qa/' ? 'ison' : ''}>Q&A</a>
        </Link>
      </Sdiv>
    </>
  )
}
export default Navi
const Sdiv = styled.div`
  max-width: 960px;
  width: 100vw;
  margin: 0px auto;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 90vh;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 1;
    margin-top: 0px;
    background: linear-gradient(127deg, #e6d4c5, #c1b8e5); 
    border-radius: 25px 10px/ 10px 25px;
    transition: 0.3s;
    transform: scale(0);

    &.get {
      transform: rotate(0deg) translateX(0) scale(1);
    }
  }

  a {
    min-width: 50px;
    font-size: large;
    display: inline;
    transition: 0.3s;
  }
  @media screen and (max-width: 440px) {
    a {
      display: block;
      margin-top: 20px;
      width: 25vw;

      transform: translateX(0vw);
      font-size: 1rem;
    }
  }

  & .ison {
    color: #555;
    font-size: large;
    background: #44da80;
    border-radius: 100px 0px/ 50px 10px;
  }
  & :hover {
    color: #555;
    font-size: large;
    background: #44da80;
    border-radius: 100px 0px/ 50px 10px;
    opacity: 0.7;
    transform: translateY(-4px);
  }
`
