import { Accordion as AccordionChakra, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { InfoPost } from 'src/models'
import { H2, P } from 'src/styled-components'

interface Props {
  data: InfoPost[]
}

export default function Accordion({ data }: Props) {
  return (
    <AccordionChakra allowToggle>
      {
        data.map(item => (
          <AccordionItem key={item.title} paddingBlock={2} borderColor="gray.500">
            <H2>
              <AccordionButton _hover={{ backgroundColor: "transparent" }}>
                <Box as="span" flex='1' textAlign='left'>
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </H2>
            <AccordionPanel pb={4}>
              <VStack gap={1} w="100%" alignItems={"flex-start"}>
              {
                item.description.map((detail, idx) => (
                  detail.title ?
                    <VStack key={idx} gap={0} alignItems="flex-start">
                      <Text textDecor={"underline"} color="gray.600" fontWeight={700} cursor="pointer">{detail.title}</Text>
                      <Text>{detail.text}</Text>
                    </VStack>
                    :
                    <Text key={idx}>{detail.text}</Text>
                ))
              }

              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))
      }

    </AccordionChakra>
  )
}
