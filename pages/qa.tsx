import { useState } from 'react'
import BackButton from './components/BackButton'
import Header from './components/Header'
import IndexHead from './components/Head'
import Section from './components/Section'
import { Box, Center } from '@chakra-ui/react'
import QaAcc from './components/QaAcc'

const Qa = () => {
  return (
    <>
      <IndexHead title="Q&A"></IndexHead>
      <Header />
      <Section title="〜よくある質問〜">
        <Center opacity={0.8}>
          以下の質問をクリックまたはタップすると回答が現れます
        </Center>
        <QaAcc Q='生年月日は？' A='1986年5月28日' />
        <QaAcc Q='家族構成は' A='妻と子2人（長男5歳、次男0歳）' />
        <QaAcc Q='希望する仕事は？' A='webのフロントエンドに関わりたいです。' />
        <QaAcc Q='普段使っているPCは？' A='Macです。' />

      </Section>
      <BackButton />
    </>
  )
}

export default Qa
