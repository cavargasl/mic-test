import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { LayoutNavbarList } from './styled-components'

export default function NavbarListMobile() {
  return (
    <LayoutNavbarList>
      <Icon path={mdiMenu} size={"15px"} />
    </LayoutNavbarList>
  )
}
