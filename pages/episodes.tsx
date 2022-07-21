import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { url } from '../utils/config'
import Header from './components/Header'
import styles from './css/baloons.module.sass'
import BackButton from './components/BackButton'
import IndexHead from './components/Head'
import { ReactEventHandler } from 'react'
import Section from './components/Section'
import { Flex, Link, Text } from '@chakra-ui/react'

const Episodes = () => {
  const [rb, setT] = useState(false)
  const setrb = useEffect(() => {
    setInterval(() => {
      setT((rb) => !rb)
    }, 1500)
  }, [])
  return (
    <>
      <IndexHead title="エピソード"></IndexHead>
      <Header />
      <Section title='エピソードを聞いてみました'>
        <p className="sub_title"></p>
        <div className="playbox">
          <div className="content">
            <div className="c_text">
              <div className={styles.baloonGroup}>
                <Image
                  alt="face"
                  src={url('/images/face.001.png')}
                  width={100}
                  height={100}
                />
                <div className={styles.balloon1Left}>
                  <p>
                    彼は音楽関係の仕事を志し、かつての職場に至ったそうです。入社後8年くらい営業をしていました。関東、東北を担当していたので、名古屋と東日本をいったりきたりしていたようですが、今では広報を担当するようになって、名古屋にとどまっているようです。
                  </p>
                </div>
              </div>
              <div className={styles.baloonGroup}>
                <div className={styles.balloon1Right}>
                  <p>
                    彼は学生時代には野球場でビールの売り子をしていました。当時は地元球団がとても強く、お客さんもたくさんスタジアムに足を運び、よくビールが売れました。ビールを売るためのトークや注ぎ方によるアピールなども身につけ、学生にしては割のいい歩合給をいただいていました。
                  </p>
                </div>
                <Image
                  alt="face"
                  src={url('/images/face.002.png')}
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.baloonGroup}>
                <Image
                  alt="face"
                  src={url('/images/face.003.png')}
                  width={100}
                  height={100}
                />
                <div className={styles.balloon1Left3}>
                  <p style={{ marginBottom: '12px' }}>
                    彼は広報活動のwebサイト修正から始まり、webプログラミングに関心を持っています。WEBアンケートやPHPでチラシPDFを作成するプログラムや、最近ではLaravelで日記アプリを作ったりしています。
                  </p>
                    <Link
                      style={{ textDecoration: 'none' }}
                      href="https://oyasdiary.ga"
                      >
                      <Flex justify="center" align='center'>
                          <Text bg="#aff" m="3" rounded="xl" fontWeight="bold" _hover={{backgroundColor:'#acc'}}>学習中のアプリはこちら</Text>
                      </Flex>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <BackButton />
    </>
  )
}
export default Episodes
