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
                  現職でひょんなことから営業マンから広報担当者となった。独学でwebサイト運営ノウハウを取得。
                  <strong>
                    <u>自分で調べ、自力で育つことのできるスキル</u>
                  </strong>
                  を持つ音楽好きであり、酒（さけであれば何でも）好きです。
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