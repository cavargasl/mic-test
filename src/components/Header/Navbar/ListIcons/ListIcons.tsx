import { mdiAccountOutline, mdiCardBulletedOutline, mdiHeartOutline, mdiMapMarkerOutline, mdiShoppingOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { LayaoutIcons } from './styled-components'

export default function ListIcons() {
  return (
    <LayaoutIcons>
      <Icon path={mdiCardBulletedOutline} size={"17px"} />
      <Icon path={mdiAccountOutline} size={"17px"} />
      <Icon path={mdiHeartOutline} size={"17px"} />
      <Icon path={mdiMapMarkerOutline} size={"17px"} />
      <Icon path={mdiShoppingOutline} size={"17px"} />
    </LayaoutIcons>
  )
}
