import { Badge, Box } from '@chakra-ui/react'
import { mdiAccountOutline, mdiCardBulletedOutline, mdiHeartOutline, mdiMapMarkerOutline, mdiShoppingOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useSelector } from 'react-redux'
import { selectCart } from 'src/redux/slices/cart'
import { LayaoutIcons } from './styled-components'

export default function ListIcons() {
  const cart = useSelector(selectCart)
  return (
    <LayaoutIcons>
      <Icon path={mdiCardBulletedOutline} size={"17px"} />
      <Icon path={mdiAccountOutline} size={"17px"} />
      <Icon path={mdiHeartOutline} size={"17px"} />
      <Icon path={mdiMapMarkerOutline} size={"17px"} />
      <Box pos={"relative"} cursor="pointer">
        <Icon path={mdiShoppingOutline} size={"17px"} />
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
      </Box>
    </LayaoutIcons>
  )
}
