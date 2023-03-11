import { Image, Span } from 'src/styled-components'
import { Info } from './Info'
import { InfoClient } from './InfoClient'
import { Newsletter } from './Newsletter'
import { BannerFooter, BannerText, LayoutFooter, PaymentMethods } from './styled-components'

export default function Footer() {
  return (
    <>
      <LayoutFooter>
        <InfoClient />
        <Newsletter />
        <PaymentMethods src='https://moviesshopco.vteximg.com.br/arquivos/medios-de-pago-mic-footer.png' alt='payment methods' />
        <Info />
      </LayoutFooter>

      <BannerFooter>
        <BannerText>
          <Span>Movies</Span>
          © 2022 ESTRATEGIA COMERCIAL DE COLOMBIA S.A.S. NIT: 830507952-5 Dirección: Calle 60 Sur N° 43A 97 Sabaneta, Colombia Tel: (+57) 604 4442849  Correo: servicioalcliente@movies.com.co
        </BannerText>
        <Image src='https://moviesshopco.vteximg.com.br/arquivos/vtex-r.svg' alt='logo vtex' width={"39px"} />
        |
        <Image src='https://moviesshopco.vteximg.com.br/arquivos/ssl-secure.svg' alt='logo ssl-secure' width={"100px"} />
      </BannerFooter>
    </>
  )
}
