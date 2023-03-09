import useWindowSize from 'src/hooks/useWindowsResize'
import { ListIcons } from './ListIcons'
import { NavbarList, NavbarListMobile } from './NavbarList'
import { Search, SearchMobile } from './Search'
import { LayoutNavbar, LayoutWraperMobile, Logo } from './styled-components'

export default function Navbar() {
  const isMobile = useWindowSize().isMobile
  return (
    <LayoutNavbar>
      {
        isMobile && <LayoutWraperMobile>
          <NavbarListMobile />
          <SearchMobile />
        </LayoutWraperMobile>
      }
      <Logo alt='logo' src='https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/movies-logo___38662b246dad72023156ecfd25bec311.svg' />
      {
        !isMobile && <NavbarList />
      }
      {
        !isMobile && <Search />
      }
      <ListIcons />
    </LayoutNavbar>
  )
}
