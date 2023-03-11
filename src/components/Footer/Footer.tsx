import { InfoClient } from './InfoClient'
import { Newsletter } from './Newsletter'
import { LayoutFooter, PaymentMethods } from './styled-components'

export default function Footer() {
  return (
    <LayoutFooter>
      <InfoClient />
      <Newsletter />
      <PaymentMethods src='https://moviesshopco.vteximg.com.br/arquivos/medios-de-pago-mic-footer.png' alt='payment methods' />
    </LayoutFooter>
  )
}
