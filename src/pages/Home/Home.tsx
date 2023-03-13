import { useEffect, useState } from 'react'
import { Footer, Header } from 'src/components'
import { Post } from 'src/models'
import { CustomSlider, PostInfo } from './components'
import { fetchPostSlider } from './services'
import { LayoutHome } from './styled-components'


export default function Home() {
  const [data, setData] = useState<Post[]>([])

  const getPost = async () => {
    try {
      const result = await fetchPostSlider()
      setData(result)
    } catch (error) {
      console.error("error get posts")
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <Header />
      <LayoutHome>
        <PostInfo />
        <CustomSlider title="También te puede INTERESAR" posts={data} />
        <CustomSlider title="Seleccionados para TI" posts={data} />
      </LayoutHome>
      <Footer />
    </>
  )
}
