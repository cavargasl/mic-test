import { mdiEmailOutline, mdiMapMarkerOutline, mdiPhone } from '@mdi/js'
import Icon from '@mdi/react'
import { Image } from 'src/styled-components'
import { CaontainIcons, ContainLink, IconLink, InfoItem, InfoItemTitle, LayoutInfo, Link } from './styled-component'

export default function Info() {
  return (
    <LayoutInfo>
      <InfoItem>
        <InfoItemTitle>SÍGUENOS</InfoItemTitle>
        <CaontainIcons>
          <Image src='https://moviesshopco.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.26.0/public/react/ebd4bd10e66138168eb6a582e00790ea.svg' alt='facebook' width={"20px"} />
          <Image src='https://moviesshopco.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.26.0/public/react/6a61a302319c062aceb9562a66381a63.svg' alt='instagram' width={"20px"} />
        </CaontainIcons>
        <InfoItemTitle>CONTÁCTANOS</InfoItemTitle>
        <InfoItem>
          <IconLink href='mailto:servicioalcliente@moviesshop.co' target={"_blank"}><Icon path={mdiEmailOutline} size={"20px"} />servicioalcliente@moviesshop.co</IconLink>
          <IconLink href='tel:+573009108311' target={"_blank"}><Icon path={mdiPhone} size={"20px"} />+57 300 910 8311</IconLink>
          <IconLink href='#'><Icon path={mdiMapMarkerOutline} size={"20px"} /><InfoItemTitle>Nuestras tiendas</InfoItemTitle></IconLink>
        </InfoItem>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>TE AYUDAMOS</InfoItemTitle>
        <ContainLink>
          <Link>Preguntas frecuentes</Link>
          <Link>Garantía de productos</Link>
          <Link>Cambios y devoluciones</Link>
          <Link>Contáctanos</Link>
        </ContainLink>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>INFORMACIÓN LEGAL</InfoItemTitle>
        <ContainLink>
          <Link>Términos y condiciones uso sitio web</Link>
          <Link>Política de tratamiento de la información personal</Link>
          <Link>Términos y condiciones promociones</Link>
          <Link>Derecho de retracto</Link>
          <Link>Superintendencia Industria y Comercio - SIC</Link>
          <Link>Autorización tratamiento de datos</Link>
          <Link>Transparencia y Ética Empresarial</Link>
        </ContainLink>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>MI CUENTA</InfoItemTitle>
        <ContainLink>
          <Link>Iniciar sesión</Link>
          <Link>Rastrea pedidos</Link>
        </ContainLink>
      </InfoItem>
      <InfoItem>
        <InfoItemTitle>ACERCA DE MOVIES</InfoItemTitle>
        <ContainLink>
          <Link>Nuestra historia</Link>
          <Link>Trabaja con nosotros</Link>
        </ContainLink>
      </InfoItem>
    </LayoutInfo>
  )
}
