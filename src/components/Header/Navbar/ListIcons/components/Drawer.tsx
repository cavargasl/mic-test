import { DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Drawer as DrawerChakra, HStack, VStack, Text, Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectCart } from 'src/redux/slices/cart'
import { Button } from 'src/styled-components'
import Card from './Card'

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface Price {
  isOffer?: boolean
  sendPrice?: number
}

export default function Drawer({ isOpen, onClose }: Props) {
  const cart = useSelector(selectCart)

  function price({ isOffer, sendPrice = 0 }: Price): string {
    const price = cart.items.reduce((acc, cur) => {
      if (cur.offer && isOffer) return acc += (cur.price * cur.quantity) * ((100 - cur.offer) / 100)
      return acc += cur.price * cur.quantity
    }, 0)
    return "$ " + (sendPrice + price).toLocaleString("es")
  }

  return (
    <DrawerChakra
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay backgroundColor={"#03044e50"} opacity={".5"} />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader textTransform={"uppercase"} fontWeight={600} borderBottom="1px solid">Mi bolsa de compras</DrawerHeader>

        <DrawerBody paddingBlock={8}>
          {
            cart.items.map(item => <Card key={item.id} data={item} quantity={item.quantity} />)
          }
        </DrawerBody>

        <DrawerFooter backgroundColor={"gray.200"}>
          <VStack w="100%" gap={4}>
            <HStack w="100%" justifyContent={"space-between"}>
              <Text textTransform={"uppercase"}>subtotal</Text>
              <Text textTransform={"uppercase"}>{price({})}</Text>
            </HStack>
            <HStack w="100%" justifyContent={"space-between"}>
              <Text textTransform={"uppercase"}>costo de envío</Text>
              <Text >A calcular</Text>
            </HStack>
            <HStack w="100%" justifyContent={"space-between"}>
              <Text textTransform={"uppercase"} fontWeight={700}>Total</Text>
              <Text textTransform={"uppercase"} fontWeight={700}>{price({ isOffer: true })}</Text>
            </HStack>
            <Text>¡Tu envío es totalmente gratis!</Text>
            <VStack w="100%" justifyContent={"space-between"}>
              <Box w="100%" h="6px" backgroundColor={"blackAlpha.300"} borderRadius="md"></Box>
              <HStack w="100%" justifyContent={"space-between"}>
                <Text fontWeight={700}>$0</Text>
                <Text fontWeight={700}>{price({ isOffer: true, sendPrice: 0 })}</Text>
              </HStack>
            </VStack>
            <Button>Finalizar Compra</Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </DrawerChakra>
  )
}
