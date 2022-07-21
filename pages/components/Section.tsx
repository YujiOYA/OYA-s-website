import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

function Section(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal }) {
    // const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("gray.100", "gray.600")
    const color = useColorModeValue("black.400", "white")
  
    return (
        <>  
             <Box as="section" m="3" >
                <Text fontSize={"2xl"} fontWeight="bold" outline={"1px solid gray.300"} textAlign='center'>{props.title}</Text>
                <Box background={bg} rounded="2xl" maxW={960} minH='50vh' m="0 auto" transition="1s">
                    <Text color={color}>
                        {props.children}
                    </Text>
                </Box>
            </Box>
        </>
    )
}
export default Section


