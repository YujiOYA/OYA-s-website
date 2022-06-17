import IndexHead from "./components/Head";
import Car from "./components/slick";
import Header from "./components/Header";
import styled from 'styled-components'

const App = () => {


  return (
    <>
      <IndexHead></IndexHead>
        <a href="./index.html"></a>
        <Header />
        <section className="eye-catch">
         
              <Car></Car>
        </section>

      


        

          <SFooter>
            <div className="f-flex">
              <a href="./index.html">
                <div className="cop">&copy; 2022 OYA</div>
              </a>
            </div>
          </SFooter>


    </>
  );
};
const SFooter =styled.footer`
  position: fixed;
  bottom: 0px;
  background: #5db3a0aa;
  text-align: center;
  width: 100vw;
`

export default App;