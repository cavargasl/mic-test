import { Badge, Box, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { mdiAccountOutline, mdiCardBulletedOutline, mdiHeartOutline, mdiMapMarkerOutline, mdiShoppingOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useSelector } from 'react-redux'
import { selectCart } from 'src/redux/slices/cart'
import { Drawer } from './components'
import { LayaoutIcons } from './styled-components'

interface Props {
  isMobile?: boolean
}
export default function ListIcons({ isMobile }: Props) {
  const cart = useSelector(selectCart)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <LayaoutIcons isMobile={isMobile}>
      <HStack>
        <Icon path={mdiCardBulletedOutline} size={"17px"} />
        {
          isMobile && <Text>Te ayudamos</Text>
        }
      </HStack>
      <HStack>
        <Icon path={mdiAccountOutline} size={"17px"} />
        {
          isMobile && <Text>Mi cuenta</Text>
        }
      </HStack>
      <HStack>
        <Icon path={mdiHeartOutline} size={"17px"} />
        {
          isMobile && <Text>Favoritos</Text>
        }
      </HStack>
      <HStack>
        <Icon path={mdiMapMarkerOutline} size={"17px"} />
        {
          isMobile && <Text>Tiendas</Text>
        }
      </HStack>
      <HStack cursor="pointer" onClick={onOpen}>
        <Box pos={"relative"} >
          <Icon path={mdiShoppingOutline} size={"17px"} />
          {
            cart.amountAll > 0 &&
            <Badge
              borderRadius={"full"}
              pos="absolute"
              right={-2}
              bottom={"-7px"}
              w="14px"
              h="14px"
              display={"flex"}
              justifyContent="center"
            >
              {cart.amountAll > 9 ? "9+" : cart.amountAll}
            </Badge>
          }
        </Box>
        {
          isMobile && <Text>Bolsa</Text>
        }
      </HStack>

      <Drawer isOpen={isOpen} onClose={onClose} />
    </LayaoutIcons>
  )
}
