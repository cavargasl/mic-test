import { useState } from 'react'
import { MenuList } from './models'
import { Item, LayoutNavbarList, NavbarItems } from './styled-components'
import { SubList } from './SubList'

export default function NavbarList() {
  const [itemSelected, setItemSelected] = useState<MenuList>()

  function handleClick(item: MenuList){
    if(itemSelected && itemSelected.title === item.title) return setItemSelected(undefined)
    return setItemSelected(item)
  }
  return (
    <LayoutNavbarList>
      {
        MenuList.map(item => (
          <NavbarItems key={item.title} onMouseEnter={() => handleClick(item)}>
            <Item>{item.title}</Item>
          </NavbarItems>
        ))
      }
      {
        itemSelected && itemSelected.subMenu && <SubList menuList={itemSelected} setItemSelected={setItemSelected} />
      }
    </LayoutNavbarList>
  )
}
