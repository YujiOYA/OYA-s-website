import next from "next"
import IndexHead from "./components/Head"
import React from "react"
import Image from "next/image"
import Car from "./components/slick"




export default ()=>{
    return(
<>
<IndexHead>
</IndexHead>
<div class="bgLP">
    <a href="./index.html">
    </a>
    <header style={{marginBottom: 15+"px"}}>
      <div class="h-flex">
        <div class="cop">
          <a href="./index.html">ポートフォリオ</a>
        </div>
        <div class="tel">
            <a href="tel:08051185151">
              <span class="">☎080-5118-5151</span>
            </a>
              <br />
              <span class="smalltext">(携帯)</span>
              <br />
        </div>
      </div>
      <p align="right" class="smalltext">〈対応時間〉18:00〜20:30(平日)</p>
          <p align="right" class="smalltext">〈対応時間〉10:00〜20:30(土日祝)</p>
    </header>
    <section class="eye-catch">
      <h1 class="message">ポートフォリオ</h1>
      <div class="catch_h3">
        <div class="content_group" style={{marginTop: 15 +'px'}}>
            <Car></Car>
          {/* <div class='slider df-cntr-sp playbox'>
            <figure><Image src="/images/car.001.jpeg" width={64} height={64} alt="MyInfo"/></figure>
            <figure><Image src="/images/car.002.jpeg" width={64} height={64} alt="MyInfo" /></figure>
            <figure><Image src="/images/car.003.jpeg" width={64} height={64} alt="MyInfo" /></figure>
            <figure><Image src="/images/car.004.jpeg" width={64} height={64} alt="MyInfo" /></figure>
          </div> */}
        </div>

      </div>

    </section>
    
  
    <div id="p-0" class="content_group">
      <p class="sub_title">OYA<br class="brsp" />とは？</p>
      <div class="d-flex df-cntr-sp playbox">
        <div class="content">
          <div class="c_text">
            <p style={{padding: 5+ 'px'}}>
              現職でひょんなことから営業マンから広報担当者となった。独学でwebサイト運営ノウハウを取得。<strong><u>自分で調べ、自力で育つことのできるスキル</u></strong>を持つ音楽好きであり、酒（さけであれば何でも）好きです。
            </p>
            <div class="button">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id='p-1' class="content_group">
      <p class="sub_title">ふろんとえんど？</p>
      <div class="playbox">
        <div class="content">
          <div class="c_text">
            html,css,JavaScriptのみではモダンな環境とはいえないので、<strong>React</strong>を学習中です。
          </div>
          <div id="app"></div>
          <div id="app"></div>
        </div>
      </div>
    </div>
  

    <div id="p-2" class="content_group">
      <p class="sub_title">エピソードを聞いてみました</p>
      <div class="playbox">
        <div class="content">
          <div class="c_text">
            <div class="baloon-group">
              <Image src="/images/face.001.png" width={100} height={100} />
              <div class="balloon1-left">
                <p>
                  彼は音楽関係の仕事を志し、かつての職場に至ったそうです。入社後8年くらい営業をしていました。関東、東北を担当していたので、名古屋と東日本をいったりきたりしていたようですが、今では広報を担当するようになって、名古屋にとどまっているようです。
                </p>
              </div>
            </div>
            <div class="baloon-group">
              <div class="balloon1-right">
                <p>
                  彼は学生時代には野球場でビールの売り子をしていました。当時は地元球団がとても強く、お客さんもたくさんスタジアムに足を運び、よくビールが売れました。ビールを売るためのトークや注ぎ方によるアピールなども身につけ、学生にしては割のいい歩合給をいただいていました。
                </p>
              </div>
              <Image src="/images/face.002.png" width={100} height={100} />
            </div>
            <div class="baloon-group">
              <Image src="/images/face.003.png" width={100} height={100} />
              <div class="balloon1-left3">
                <p>
                  彼は広報活動のwebサイト修正から始まり、webプログラミングに関心を持っています。WEBアンケートやPHPでチラシPDFを作成するプログラムや、最近ではLaravelでBBSを作ったりしています。
                </p>
                <div class="repeat-button">
                  <a href = 'http://myappbbs.herokuapp.com'>
                    <p class="inner">学習中のアプリはこちら</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id='p-3' class="content_group">
      <p class="sub_title">〜よくあるご質問〜</p>
      <p style={{textAlign: 'center'}}>以下の質問をクリックまたはタップすると回答が現れます</p>
        <div class="accordion">
          <div class="menu js-menu" onClick={open()}>
            <p class="qa_q">Q.</p>
            <p class="qa_b">年齢は?</p>
          </div>
          <div class="contents">
            <p class="qa_a">A.</p>
            <p class="qa_b">
              35歳です
            </p>
          </div>

          <div class="menu js-menu">
            <p class="qa_q">Q.</p>
            <p class="qa_b">家族構成は??</p>
          </div>
          <div class="contents">
            <p class="qa_a">A.</p>
            <p class="qa_b">
              妻と子2人（長男5歳、次男0歳）
            </p>
          </div>
          <div class="menu js-menu">
            <p class="qa_q">Q.</p>
            <p class="qa_b">希望する仕事は？</p>
          </div>
          <div class="contents">
            <p class="qa_a">A.</p>
            <p class="qa_b">
              コードを書かせてください。
            </p>
          </div>
          <div class="menu js-menu">
            <p class="qa_q">Q.</p>
            <p class="qa_b">普段使っているPCは？</p>
          </div>
          <div class="contents">
            <p class="qa_a">A.</p>
            <p class="qa_b">
              Macです。
            </p>
          </div>
      </div>

      <footer>
        <div class="f-flex">
          <a href="./index.html">
            <div class="cop">&copy; 2022 OYA</div>
          </a>
        </div>
      </footer>
    </div>
</div>
</>
)}