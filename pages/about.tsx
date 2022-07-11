import Header from "./components/Header";
import BackButton from "./components/BackButton";
import IndexHead from "./components/Head";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { url } from "../utils/config";


function About() {
  return (
    <>
      <IndexHead title='OYAとは'></IndexHead>
      <Header />

      <div id="p-0" className="content_group">
        <p className="sub_title">
          OYA
          <br className="brsp" />
          とは？
        </p>
        <Box w='85%' bg='#fff' borderRadius={'30px'} p='15px' m='0px auto'>
          {/* <div className="content">
              <div className="c_text"> */}
              <Center>
              <Image
                alt='face'
                src={url("/images/OYA.jpg")}
                width='130px'
                height='200px'
                />
              </Center>
                
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Text style={{ padding: 5 + "px" }}>
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
            </Text>



          </Box>

          {/* </div>
          </div> */}
        </Box>
        <BackButton />
      </div>


    </>
  );
}

export default About;