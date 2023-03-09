import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { LayoutNavbarList, NavbarItems } from './styled-components'

interface Props {
  isMobile?: boolean
}

export default function NavbarList({ isMobile }: Props) {
  if (isMobile) return (
    <LayoutNavbarList>
      <Icon path={mdiMenu} size={"15px"} />
    </LayoutNavbarList>
  )
  return (
    <LayoutNavbarList>
      <NavbarItems>Mujer</NavbarItems>
      <NavbarItems>Hombre</NavbarItems>
      <NavbarItems>New arrivals</NavbarItems>
      <NavbarItems>Básicos</NavbarItems>
      <NavbarItems>Cyber days</NavbarItems>
    </LayoutNavbarList>
  )
}
