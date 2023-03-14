export interface Post {
  id: string
  title: string
  description: string
  price: number
  offer?: number
  img: string[]
  isNew?: boolean
  likes: number
}
export interface PostDetail extends Post {
  likes: number
  sizes: string[]
  info: InfoPost[]
  aditionalInfo: string
}

export interface InfoPost {
  title: string
  description: {
    title?: string
    text: string
  }[]
}

export const ListPostPreviewEmptyState: Post[] = []

export interface CartItem extends Post {
  quantity: number;
}