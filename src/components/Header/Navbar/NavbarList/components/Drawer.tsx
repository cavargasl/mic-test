import { Drawer as DrawerChakra, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, VStack } from '@chakra-ui/react'
import { ListIcons } from '../../ListIcons'
import { MenuList } from '../models'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ isOpen, onClose }: Props) {
  return (
    <DrawerChakra
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay backgroundColor={"#03044e50"} opacity={".5"} />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader textTransform={"uppercase"} fontSize="2rem" fontWeight={600} borderBottom="1px solid">¡Hola!</DrawerHeader>

        <DrawerBody paddingBlock={8} display="flex" flexDir={"column"} gap={8}>
          <VStack gap={6} alignItems="start" borderBottom={"1px solid"} borderColor="blackAlpha.400" paddingBottom={6}>
            {
              MenuList.map(item => <Text key={item.title} fontWeight={800} fontSize="1.2rem" cursor={"pointer"}>{item.title}</Text>)
            }
          </VStack>
          <ListIcons isMobile />
        </DrawerBody>


      </DrawerContent>
    </DrawerChakra>
  )
}
