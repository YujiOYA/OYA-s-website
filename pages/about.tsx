import Header from './components/Header'
import BackButton from './components/BackButton'
import IndexHead from './components/Head'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { url } from '../utils/config'
import Section from './components/Section'

function About() {
  return (
    <>
      <IndexHead title="OYAとは"></IndexHead>
      <Header />
      <Section title="OYAとは">
        <Box w="85%" borderRadius={'30px'} p="15px" m="0px auto">
          {/* <div className="content">
              <div className="c_text"> */}
          <Center>
            <Image
              alt="face"
              src={url('/images/OYA.jpg')}
              width="130px"
              height="200px"
            />
          </Center>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Text style={{ padding: 5 + 'px' }}>
              名古屋在住。１９８６年生まれ。
              <br />
              中学高校を陸上競技部で、大学は市民ランナーとして鍛錬を積んだ。
              <br />
              社会人となってからは鍛えた体力を生かし、順調にキャリアを積み上げたが・・・？
              <br />
              いろいろあって2022年からはエンジニアとしてのキャリアをスタートさせています。
              <br />
              <strong>
                <u>自分で調べ、自力で育つ、DIY精神を大切に</u>
                <br />
              </strong>
              趣味は料理。強くないけど酒も好き。ビールはサッポロ、ウイスキーはニッカ。<br />
              マイホームで妻と子供２人に育てられています。<br />
            </Text>
          </Box>

          {/* </div>
          </div> */}
        </Box>
      </Section>
        <BackButton />
    </>
  )
}

export default About
