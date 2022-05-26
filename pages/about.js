import Header from "./components/Header";
import BackButton from "./components/BackButton";

const About = ()=>{
return (
    <>
        <Header />

        <div id="p-0" className="content_group">
          <p className="sub_title">
            OYA
            <br className="brsp" />
            とは？
          </p>
          <div className="d-flex df-cntr-sp playbox">
            <div className="content">
              <div className="c_text">
                <p style={{ padding: 5 + "px" }}>
                 名古屋在住。１９８６年生まれ。<br />
                 中高を陸上競技部で、大学は市民ランナーとして鍛錬を積んだ。<br />
                 社会人となってからは鍛えた体力を生かして営業をし、順調にキャリアを積み上げたが・・・？<br />
                 <br />
                 ２０１８年に広報担当者に任命され、ウェブサイトくらいは自力でやらないとと思い、学習開始。<br />
                 やってみたら沼にハマり現在に至ります。コーディング楽しい。<br />
                  <strong>
                    <u>自分で調べ、自力で育つ、DIY精神を大切に</u><br />
                  </strong>
                  趣味は料理。
                </p>

              </div>
            </div>
          </div>
          <BackButton />
        </div>


    </>
  );
};

export default About;