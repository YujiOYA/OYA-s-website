import next from "next"
import IndexHead from "./components/Head"
import React, { useEffect, useState } from "react"
import Car from "./components/slick"
import { url } from "./utils/config"


export default ()=>{

  const [values1, setActive1] = useState(false);
  const [values2, setActive2] = useState(false);
  const [values3, setActive3] = useState(false);
  const [values4, setActive4] = useState(false);
  const [rb, setT]= useState(false);

  const onoff1 = ()=> setActive1(!values1)
  const onoff2 = ()=> setActive2(!values2)
  const onoff3 = ()=> setActive3(!values3)
  const onoff4 = ()=> setActive4(!values4)

  let numOfPressed=0;
  const setrb =useEffect(()=> {
    setInterval(()=>{
      setT(rb=>!rb)
    }, 1500);
    },[])

    
    return(
<>
<IndexHead>
</IndexHead>


<div className="bgLP">
    <a href="./index.html">
    </a>
    <header style={{marginBottom: 15+"px"}}>
      <div className="h-flex">
        <div className="cop">
          <a href="./index.html">ポートフォリオ</a>
        </div>
        <div className="tel">
            <a href="tel:08051185151">
              <span className="">☎080-5118-5151</span>
            </a>
              <span className="smalltext">(携帯)</span>
              <br />
        </div>
      </div>
      <p align="right" className="smalltext">〈対応時間〉18:00〜20:30(平日)</p>
          <p align="right" className="smalltext">〈対応時間〉10:00〜20:30(土日祝)</p>
    </header>
    <section className="eye-catch">
      <h1 className="message">ポートフォリオ</h1>
      <div className="catch_h3">
        <div className="content_group" style={{marginTop: 15 +'px'}}>
            <Car></Car>
          {/* <div className='slider df-cntr-sp playbox'>
            <figure><Image src="/images/car.001.jpeg" width={64} height={64} alt="MyInfo"/></figure>
            <figure><Image src="/images/car.002.jpeg" width={64} height={64} alt="MyInfo" /></figure>
            <figure><Image src="/images/car.003.jpeg" width={64} height={64} alt="MyInfo" /></figure>
            <figure><Image src="/images/car.004.jpeg" width={64} height={64} alt="MyInfo" /></figure>
          </div> */}
        </div>

      </div>

    </section>
    
  
    <div id="p-0" className="content_group">
      <p className="sub_title">OYA<br className="brsp" />とは？</p>
      <div className="d-flex df-cntr-sp playbox">
        <div className="content">
          <div className="c_text">
            <p style={{padding: 5+ 'px'}}>
              現職でひょんなことから営業マンから広報担当者となった。独学でwebサイト運営ノウハウを取得。<strong><u>自分で調べ、自力で育つことのできるスキル</u></strong>を持つ音楽好きであり、酒（さけであれば何でも）好きです。
            </p>
            <div className="button">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id='p-1' className="content_group">
      <p className="sub_title">ふろんとえんど？</p>
      <div className="playbox">
        <div className="content">
          <div className="c_text">
            html,css,JavaScriptのみではモダンな環境とはいえないので、<strong>React</strong>を学習中です。
          </div>
          <div id="app"></div>
          <div id="app"></div>
        </div>
      </div>
    </div>
  

    <div id="p-2" className="content_group">
      <p className="sub_title">エピソードを聞いてみました</p>
      <div className="playbox">
        <div className="content">
          <div className="c_text">
            <div className="baloon-group">
              <img src={url("/images/face.001.png")} width={100} height={100} />
              <div className="balloon1-left">
                <p>
                  彼は音楽関係の仕事を志し、かつての職場に至ったそうです。入社後8年くらい営業をしていました。関東、東北を担当していたので、名古屋と東日本をいったりきたりしていたようですが、今では広報を担当するようになって、名古屋にとどまっているようです。
                </p>
              </div>
            </div>
            <div className="baloon-group">
              <div className="balloon1-right">
                <p>
                  彼は学生時代には野球場でビールの売り子をしていました。当時は地元球団がとても強く、お客さんもたくさんスタジアムに足を運び、よくビールが売れました。ビールを売るためのトークや注ぎ方によるアピールなども身につけ、学生にしては割のいい歩合給をいただいていました。
                </p>
              </div>
              <img src={url("/images/face.002.png")} width={100} height={100} />
            </div>
            <div className="baloon-group">
              <img src={url("/images/face.003.png")} width={100} height={100} />
              <div className="balloon1-left3">
                <p>
                  彼は広報活動のwebサイト修正から始まり、webプログラミングに関心を持っています。WEBアンケートやPHPでチラシPDFを作成するプログラムや、最近ではLaravelでBBSを作ったりしています。
                </p>
                <div className="repeat-button">
                  <a href = 'http://myappbbs.herokuapp.com'>
                    <p onLoad={setrb} className={`inner ${rb?"ispressed":""}`}>学習中のアプリはこちら</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='p-3' className="content_group">
      <p className="sub_title">〜よくあるご質問〜</p>
      <p style={{textAlign: 'center'}}>以下の質問をクリックまたはタップすると回答が現れます</p>
        <div className="accordion">
          <div className="menu js-menu" onClick={onoff1}>
            <p className="qa_q">Q.</p>
            <p className="qa_b">年齢は?</p>
          </div>
          <div className={`contents ${values1? "is-open":"" }`}>
            <p className="qa_a">A.</p>
            <p className="qa_b">
              35歳です
            </p>
          </div>

          <div className="menu js-menu" onClick={onoff2}>
            <p className="qa_q">Q.</p>
            <p className="qa_b">家族構成は??</p>
          </div>
          <div className={`contents ${values2? "is-open":"" }`}>
            <p className="qa_a">A.</p>
            <p className="qa_b">
              妻と子2人（長男5歳、次男0歳）
            </p>
          </div>
          <div className="menu js-menu" onClick={onoff3}>
            <p className="qa_q">Q.</p>
            <p className="qa_b">希望する仕事は？</p>
          </div>
          <div className={`contents ${values3? "is-open":"" }`}>
            <p className="qa_a">A.</p>
            <p className="qa_b">
              コードを書かせてください。
            </p>
          </div>
          <div className="menu js-menu" onClick={onoff4}>
            <p className="qa_q">Q.</p>
            <p className="qa_b">普段使っているPCは？</p>
          </div>
          <div className={`contents ${values4? "is-open":"" }`}>
            <p className="qa_a">A.</p>
            <p className="qa_b">
              Macです。
            </p>
          </div>
      </div>

      <footer>
        <div className="f-flex">
          <a href="./index.html">
            <div className="cop">&copy; 2022 OYA</div>
          </a>
        </div>
      </footer>
    </div>
</div>
</>
)}