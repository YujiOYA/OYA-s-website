import { useRouter } from "next/router";
import Button from "./button";

const BackButton=()=>{
    const router = useRouter();
    return(
        <Button alia-label="戻る" onClick={()=>router.push('/')}> ホームに戻る</Button>
    )
}
export default BackButton
