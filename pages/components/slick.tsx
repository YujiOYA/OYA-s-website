import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Text, Box, Center, Flex, VStack, Stack } from '@chakra-ui/react'


const Car = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1350,
    arrows: false,
    fade: true,
  }
  return (
    <>
    <Box w="80%" m="0 auto">
      <Box style={{display:"block",width:"none"}} >
      <Slider {...settings} >
        <Box minHeight="65vh" transition="1s ease-in-out">
          <Center w="auto" minHeight="75vh">
            <h1 className="message" style={{margin:'12px 4px'}}>Welcome</h1>
          </Center>
        </Box>
        <Box minHeight="65vh">
          <Center w="auto" minHeight="75vh">
            <VStack>
              <Flex w="100%" justify="flex-start" flexDir="column">
                <Text as="h2">Name</Text>
                <Text ml={20} fontSize="1.4rem" fontWeight="bold" as="p">Yuji OYA</Text>
              </Flex>
              <Flex w="100%" justify="flex-start" flexDir="column">
                <Text as="h2">Address</Text>
                <Text  ml={20} fontSize="1.3rem" fontWeight="bold" as="p">Nagoya Aichi</Text>
              </Flex>
            </VStack>
          </Center>
        </Box>
        <Box minHeight="65vh">
          <Center w="auto" minHeight="75vh">
            <VStack>
              <h1>Skills</h1>
              <Flex w="100%" justify="flex-start" flexDir="column">
              <h3>言語</h3>
                <Text ml={20}>
                  HTML　CSS　PHP　JavaScript　TypeScript
                </Text>
                </Flex>
                <Flex w="100%" justify="flex-start" flexDir="column">
              <h3>フレームワーク</h3>
                <Text ml={20}>
                  Laravel　React
                </Text>
                </Flex>
            </VStack>
          </Center>

        </Box>
      </Slider>
      </Box>
      </Box>
    </>
  )
}
export default Car
