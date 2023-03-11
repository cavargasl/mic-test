import { InfoClient } from './InfoClient'
import { Newsletter } from './Newsletter'
import { LayoutFooter } from './styled-components'

export default function Footer() {
  return (
    <LayoutFooter>
      <InfoClient />
      <Newsletter />
    </LayoutFooter>
  )
}
