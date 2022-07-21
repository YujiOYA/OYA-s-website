import Link from "next/link"
import Navi from "./Navi"
import { HStack, Center, IconButton, useColorMode, useColorModeValue, VStack, Box, Text, Flex } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const fontColor = useColorModeValue("black", "white");
  return (
    <>
      <VStack>


      <Flex maxW="960px" w="100%" justify='space-between' p="1rem" >
      <Box>

          <Link href="/">
            <a>
              <Text fontSize={{base:"md",sm:"2xl",md:"4xl",}} fontWeight={"extrabold"}>
                ポートフォリオ
              </Text>
            </a>
              </Link>
          <a href="tel:08051185151">
            <Text fontSize="md" fontWeight={"semibold"}>☎080-5118-5151 <Text as="span" fontSize="sm">(携帯)</Text></Text>
          </a>
          
      </Box>
      <Flex>
        <Box>
          〈対応時間〉<br></br>10:00〜20:30
        </Box>
      <IconButton
      _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
      ml={1}
      aria-label="DarkMode Switch"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} //自分の好みでSunアイコンはreact-iconsを使用しています
      onClick={toggleColorMode}
    />
    </Flex>

    </Flex>
    <Navi />
    </VStack>
    </>
  )
}

export default Header
