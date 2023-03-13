import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useState } from 'react'
import { Post } from 'src/models'
import { Button, Image } from 'src/styled-components'
import { Description, LayoutCard, LayoutImage, LayoutPrice, New, OfferPrice, Offert, Price, Title } from './styled-components'

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
      <Description>{post.description}</Description>
      <LayoutPrice>
        {
          post.offer && <OfferPrice>{`$${(post.price).toLocaleString('es')}`}</OfferPrice>
        }
        <Price>${post.offer ? ((post.offer / 100) * post.price).toLocaleString('es') : (post.price).toLocaleString('es')}</Price>
      </LayoutPrice>
      <Button secundary>Ver producto</Button>
    </LayoutCard>
  )
}
