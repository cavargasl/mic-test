import { Box, Button, HStack, Input, Text, useNumberInput, VStack } from '@chakra-ui/react'
import { mdiTrashCanOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useDispatch } from 'react-redux'
import { Post } from 'src/models'
import { OfferPrice, Price } from 'src/pages/Home/components/styled-components'
import { addToCart, removeToCart } from 'src/redux/slices/cart'
import { Image } from 'src/styled-components'

interface Props {
  data: Post
  quantity: number
}

export default function Card({ data, quantity }: Props) {
  const dispatch = useDispatch()

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantity,
      min: 1,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  function handleClick({ value }: { value: "add" | "sub" }) {

    return dispatch(addToCart({ post: { ...data }, quantity: value === "add" ? 1 : quantity === 1 ? 0 : -1 }))

  }
  return (
    <HStack borderBottom={"1px solid"} paddingBottom={4} borderColor={"blackAlpha.300"} gap={4}>
      <Image src={data.img[0]} alt={data.img[0]} width="96px" />
      <VStack alignItems={"flex-start"} >
        <HStack justifyContent={"space-between"} w="100%" color="blackAlpha.500">
          <Text textTransform={"uppercase"} fontWeight={800}>{data.title}</Text>
          <Box cursor={"pointer"} onClick={() => dispatch(removeToCart({ ...data, quantity }))}>
            <Icon path={mdiTrashCanOutline} size={1} />
          </Box>
        </HStack>
        <Text textTransform={"uppercase"} noOfLines={1}>{data.description}</Text>
        <HStack gap={4} justifyContent="space-between" w="100%">
          <HStack maxW='110px' height="50px" spacing={0}>
            <Button {...dec} backgroundColor="transparent" border={"1px solid"} borderColor="gray.300" borderRightRadius={"sm"} onClick={() => handleClick({ value: "sub" })}>-</Button>
            <Input {...input} border="1px solid" borderColor="gray.300" borderRadius={0} />
            <Button {...inc} backgroundColor="transparent" border={"1px solid"} borderColor="gray.300" borderLeftRadius={"sm"} onClick={() => handleClick({ value: "add" })}>+</Button>
          </HStack>
          <VStack>
            {
              data.offer && <OfferPrice size='1.2rem'>{`$${(data.price).toLocaleString('es')}`}</OfferPrice>
            }
            <Price size='1.3rem'>${data.offer ? (((100 - data.offer) / 100) * data.price).toLocaleString('es') : (data.price).toLocaleString('es')}</Price>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  )
}
