import { Box, Grid } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Image } from 'src/styled-components'

interface Props {
  data: string[]
}
export default function PostPhotos({ data }: Props) {

  return (
    <Grid gap={10} gridTemplateColumns=".2fr .8fr">
      <Splide
        options={{
          gap: "4em",
          perPage: 4,
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
            type: "loop"
          }}
        >
          {
            data.map(item => (
              <SplideSlide key={item} >
                <Image src={item} alt={item} />
              </SplideSlide>
            ))
          }
        </Splide>

      </Box>
    </Grid>
  )
}
