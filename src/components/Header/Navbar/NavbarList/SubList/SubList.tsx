import { MenuList } from '../models'
import { Item, LayoutSubList, LayoutTitle, LinkShowMore, Title } from './styled-component'
interface Props {
  menuList: MenuList
  setItemSelected: React.Dispatch<MenuList | undefined>
}
export default function SubList({ menuList, setItemSelected }: Props) {
  return (
    <LayoutSubList onMouseLeave={() => setItemSelected(undefined)}>
      <LayoutTitle>
        <Title>{menuList.title} <LinkShowMore>ver todo</LinkShowMore></Title>
      </LayoutTitle>
      {
        menuList.subMenu?.map(item => <Item>{item}</Item>)
      }
    </LayoutSubList>
  )
}
