import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Text } from "@chakra-ui/react";

type Props={
    Q:string,
    A:string
}
export default function QaAcc(props:Props){
return(
<Accordion allowToggle>
<AccordionItem>
    <AccordionButton >
      <Box m="0 auto">
      <Text fontSize='3xl' fontWeight="extrabold">Q.</Text>
      <Text>{props.Q}</Text>
      </Box>
    </AccordionButton>
      <AccordionIcon />
  <AccordionPanel pb={4}>
  <Center fontSize='3xl' fontWeight="extrabold">A.</Center>
  <Center>{props.A}</Center>
  </AccordionPanel>
</AccordionItem>
</Accordion>
)}