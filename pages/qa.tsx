import { useState } from "react";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import IndexHead from "./components/Head";



const Qa = ()=>{
    const [values1, setActive1] = useState(false);
    const [values2, setActive2] = useState(false);
    const [values3, setActive3] = useState(false);
    const [values4, setActive4] = useState(false);

    const onoff1 = () => setActive1(!values1);
    const onoff2 = () => setActive2(!values2);
    const onoff3 = () => setActive3(!values3);
    const onoff4 = () => setActive4(!values4);

    return(
        <>
        <IndexHead title='Q&A'></IndexHead>
        <Header />
        <div id="p-3" className="content_group">
          <p className="sub_title">〜よくあるご質問〜</p>
          <p style={{ textAlign: "center" }}>
            以下の質問をクリックまたはタップすると<br />回答が現れます
          </p>
          <div className="accordion">
            <div className="menu js-menu" onClick={onoff1}>
              <p className="qa_q">Q.</p>
              <p className="qa_b"> 生年月日は?</p>
            </div>
            <div className={`contents ${values1 ? "is-open" : ""}`}>
              <p className="qa_a">A.</p>
              <p className="qa_b">１９８６年５月２８日です</p>
            </div>

            <div className="menu js-menu" onClick={onoff2}>
              <p className="qa_q">Q.</p>
              <p className="qa_b">家族構成は??</p>
            </div>
            <div className={`contents ${values2 ? "is-open" : ""}`}>
              <p className="qa_a">A.</p>
              <p className="qa_b">妻と子2人（長男5歳、次男0歳）</p>
            </div>
            <div className="menu js-menu" onClick={onoff3}>
              <p className="qa_q">Q.</p>
              <p className="qa_b">希望する仕事は？</p>
            </div>
            <div className={`contents ${values3 ? "is-open" : ""}`}>
              <p className="qa_a">A.</p>
              <p className="qa_b">webのフロントエンドに関わりたいです。</p>
            </div>
            <div className="menu js-menu" onClick={onoff4}>
              <p className="qa_q">Q.</p>
              <p className="qa_b">普段使っているPCは？</p>
            </div>
            <div className={`contents ${values4 ? "is-open" : ""}`}>
              <p className="qa_a">A.</p>
              <p className="qa_b">Macです。</p>
            </div>
          </div>
        </div>
        <BackButton />
        </>
    )
}

export default Qa