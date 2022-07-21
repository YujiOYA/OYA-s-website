import IndexHead from './components/Head'
import Car from './components/slick'
import Header from './components/Header'
import styled from 'styled-components'
import Link from 'next/link'

const App = () => {
  return (
    <>
      <IndexHead title="ポートフォリオ"></IndexHead>
      <Header />
      <section className="eye-catch">
        <Car></Car>
      </section>

      <SFooter>
        <div className="f-flex">
          <Link href="/">
            <a>
              <div className="cop">&copy; 2022 OYA</div>
            </a>
          </Link>
        </div>
      </SFooter>
    </>
  )
}
const SFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  background: #5db3a0aa;
  text-align: center;
  width: 100vw;
`

export default App
