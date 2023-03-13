export interface Post {
  id: string
  title: string
  description: string
  price: number
  offer?: number
  img: string[]
  likes: number
  isNew?: boolean
}