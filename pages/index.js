import IndexHead from "./components/Head";
import React, {useState, useEffect } from "react";
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
          <h1 className="message" style={{margin:'12px 4px'}}>ポートフォリオ </h1>
          <div className="catch_h3">
            <div className="content_group" style={{ marginTop: 15 + "px" }}>
              <Car></Car>
            </div>
          </div>
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
  background: #fff;
  text-align: center;
  width: 100vw;
`

export default App;