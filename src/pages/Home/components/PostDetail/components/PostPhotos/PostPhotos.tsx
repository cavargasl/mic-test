import { Box, Grid } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import useWindowSize from 'src/hooks/useWindowsResize'
import { Image } from 'src/styled-components'

interface Props {
  data: string[]
}
export default function PostPhotos({ data }: Props) {
  const size = useWindowSize()

  function amountPhotos(): number {
    if (size.width) {
      if (size.width < 536) return 6
      if (size.width < 811) return 5
      if (size.width < 1000) return 4
      if (size.width < 1350) return 3
      if (size.width < 1515) return 4
    }
    return 3
  }

  return (
    <Grid gap={10} gridTemplateColumns=".2fr .8fr" maxH={"600px"} >
      <Splide
        options={{
          gap: "4em",
          perPage: amountPhotos(),
          perMove: 1,
          height: "600px",
          speed: 1000,
          pagination: false,
          direction: "ttb",
          type: "loop"
        }}
      >
        {
          data.map((item, idx) => (
            <SplideSlide key={item} >
              <Image src={item} alt={item} />
            </SplideSlide>
          ))
        }
      </Splide>
      <Box display={"flex"} alignItems="center">
        <Splide
          options={{
            gap: "2em",
            perPage: 1,
            perMove: 1,
            speed: 1000,
            pagination: false,
            type: "loop",
            height: "600px"
          }}
        >
          {
            data.map(item => (
              <SplideSlide key={item} >
                <Box display={"flex"} height={"100%"} justifyItems="center" justifyContent={"center"}>

                <Image src={item} alt={item} />
                </Box>
              </SplideSlide>
            ))
          }
        </Splide>

      </Box>
    </Grid>
  )
}
