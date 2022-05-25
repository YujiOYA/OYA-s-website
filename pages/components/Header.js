import Link from "next/link"
import Navi from "./Navi"
const Header = () => {
  return (
    <>
    <header style={{ marginBottom: 15 + 'px' }}>
      <div className="h-flex">
        <div className="cop">
          <Link href="/"><a>ポートフォリオ</a></Link>
        </div>
        <div className="tel">
          <a href="tel:08051185151">
            <span className="">☎080-5118-5151</span>
          </a>
          <span className="smalltext">(携帯)</span>
          <br />
        </div>
      </div>
      <p align="right" className="smalltext">
        〈対応時間〉18:00〜20:30(平日)
      </p>
      <p align="right" className="smalltext">
        〈対応時間〉10:00〜20:30(土日祝)
      </p>
    <Navi />
    </header>
    </>
  )
}

export default Header
