import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useState } from 'react'
import { Post } from 'src/models'
import { Button, Image, P } from 'src/styled-components'
import { LayoutPrice, OfferPrice, Price } from '../styled-components'
import { LayoutCard, LayoutImage, New, Offert, Title } from './styled-components'

interface Props {
  post: Post
}

export default function Card({ post }: Props) {
  const [showArrows, setShowArrows] = useState(false)

  return (
    <LayoutCard>
      <LayoutImage onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
        <Splide
          options={{
            perPage: 1,
            pagination: false,
            arrows: showArrows
          }}
        >
          {
            post.img.map(item => (
              <SplideSlide key={item} >
                <Image src={item} width="100%" />
              </SplideSlide>
            ))
          }
        </Splide>
        {
          post.offer && <Offert>{`-${post.offer}%`}</Offert>
        }
        {
          post.isNew && <New>Nuevo</New>
        }
      </LayoutImage>
      <Title>{post.title}</Title>
      <P>{post.description}</P>
      <LayoutPrice>
        {
          post.offer && <OfferPrice>{`$${(post.price).toLocaleString('es')}`}</OfferPrice>
        }
        <Price>${post.offer ? (((100 - post.offer) / 100) * post.price).toLocaleString('es') : (post.price).toLocaleString('es')}</Price>
      </LayoutPrice>
      <Button secundary>Ver producto</Button>
    </LayoutCard>
  )
}
