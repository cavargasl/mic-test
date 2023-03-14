import { Button, Drawer as DrawerChakra, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, VStack } from '@chakra-ui/react'
import { mdiBackburger } from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'
import { ListIcons } from '../../ListIcons'
import { MenuList } from '../models'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ isOpen, onClose }: Props) {
  const [subMenu, setSubMenu] = useState<MenuList["subMenu"]>()

  function handleClick(data: MenuList["subMenu"]) {
    if (data) return setSubMenu(data)
    return setSubMenu(undefined)
  }

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
          {
            subMenu ?
              <VStack gap={6} alignItems="start" borderBottom={"1px solid"} borderColor="blackAlpha.400" paddingBottom={6}>
                <Button variant={"unstyled"} color="red" onClick={() => handleClick(undefined)}>
                  <Icon path={mdiBackburger} size={2} />
                </Button>
                {
                  subMenu.map(item => <Text key={item} fontWeight={600} cursor={"pointer"}>{item}</Text>)
                }
              </VStack>
              :
              <VStack gap={6} alignItems="start" borderBottom={"1px solid"} borderColor="blackAlpha.400" paddingBottom={6}>
                {
                  MenuList.map(item => <Text key={item.title} fontWeight={800} fontSize="1.2rem" cursor={"pointer"} onClick={() => handleClick(item.subMenu)}>{item.title}</Text>)
                }
              </VStack>
          }
          <ListIcons isMobile />
        </DrawerBody>


      </DrawerContent>
    </DrawerChakra>
  )
}
