import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Image } from 'src/styled-components'

interface Props {
  isOpen: boolean
  onClose: () => void
}
export default function ModalSize({ isOpen, onClose }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"5xl"} >
        <ModalOverlay backgroundColor={"#03044e50"} opacity={".5"} />
        <ModalContent>

          <ModalCloseButton />
          <ModalBody overflowY={"auto"} maxHeight="500px" >
            <Image src='https://moviesshopco.vteximg.com.br/arquivos/guia-de-tallas.jpg' alt='guia de tallas' />
          </ModalBody>


        </ModalContent>
      </Modal>


    </>

  )
}
