import { Button, useDisclosure } from '@chakra-ui/react'
import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { Drawer } from './components'
import { LayoutNavbarList } from './styled-components'

export default function NavbarListMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <LayoutNavbarList>
      <Button variant={"unstyled"} onClick={onOpen}>
        <Icon path={mdiMenu} size={"15px"} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </LayoutNavbarList>
  )
}
