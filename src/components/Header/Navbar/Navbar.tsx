import { LayoutNavbar, Logo, NavbarItems, NavbarList } from './styled-components'

export default function Navbar() {
  return (
    <LayoutNavbar>
      <Logo alt='logo' src='https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/movies-logo___38662b246dad72023156ecfd25bec311.svg' />
      <NavbarList>
        <NavbarItems>Mujer</NavbarItems>
        <NavbarItems>Hombre</NavbarItems>
        <NavbarItems>New arrivals</NavbarItems>
        <NavbarItems>Básico</NavbarItems>
        <NavbarItems>Cyber days</NavbarItems>
      </NavbarList>
    </LayoutNavbar>
  )
}
