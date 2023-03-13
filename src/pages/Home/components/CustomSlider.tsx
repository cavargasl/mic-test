
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import useWindowSize from 'src/hooks/useWindowsResize';
import { Post } from 'src/models';
import { Card } from './components';
import { LayoutSlider, TitleSlider, TitleStrong } from './styled-components';

interface Props {
  posts: Post[]
  title: string
}

export default function CustomSlider({ posts, title }: Props) {
  const size = useWindowSize()

  function amountCard(): number {
    if (size.width) {
      if (size.width < 816) return 1
      if (size.width < 991) return 2
      if (size.width < 1216) return 3
      if (size.width < 1491) return 4
    }
    return 5
  }

  return (
    <LayoutSlider>
      <TitleSlider>{title.split(" ").slice(0, -1).join(" ")} <TitleStrong>{title.split(" ").slice(-1)}</TitleStrong></TitleSlider>
      <Splide
        options={{
          gap: "2em",
          perPage: amountCard(),
          perMove: amountCard(),
          padding: { left: 100, right: 100 },
          height: "100%",
          speed: 1000
        }}
      >
        {
          posts.sort(() => 0.5 - Math.random()).map(item => (
            <SplideSlide key={item.id} >
              <Card post={item} />
            </SplideSlide>
          ))
        }
      </Splide>
    </LayoutSlider>
  )
}
