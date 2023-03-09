import { MenuList } from '../models'
import { LayoutSubList, LayoutTitle, P, Title } from './styled-component'
interface Props {
  menuList: MenuList
  setItemSelected: React.Dispatch<MenuList | undefined>
}
export default function SubList({ menuList, setItemSelected }: Props) {
  return (
    <LayoutSubList onMouseLeave={() => setItemSelected(undefined)}>
      <LayoutTitle>
        <Title>{menuList.title}</Title>
        <P>ver todo</P>
      </LayoutTitle>
      {
        menuList.subMenu?.map(item => <P>{item}</P>)
      }
    </LayoutSubList>
  )
}
