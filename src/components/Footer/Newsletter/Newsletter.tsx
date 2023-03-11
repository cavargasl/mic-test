import { A, Button, Input, InputGroup, Label, P } from 'src/styled-components'
import { CheckGroup, ContainCheck, LayoutButtonSend, LayoutCheck, LayoutInputs, LayoutNewsletter, Text, TitleNewsletter } from './styled-component'

export default function Newsletter() {
  return (
    <LayoutNewsletter>
      <TitleNewsletter>La Historia Continua...</TitleNewsletter>
      <Text>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES. ¡Recibe 15% OFF EN TU PRIMERA COMPRA!</Text>
      <LayoutInputs>
        <InputGroup>
          <Label htmlFor='fullName'>Nombres y aprellidos</Label>
          <Input id="fullName" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='email'>Correo electrónico</Label>
          <Input type="email" id="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='tel'>Celular</Label>
          <Input id="tel" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor='id'>Número de documento</Label>
          <Input id="id" />
        </InputGroup>
      </LayoutInputs>

      <ContainCheck>
        <Label>Te interesa productos para</Label>
        <LayoutCheck>
          <CheckGroup>
            <Input type="checkbox" />
            <Label >Hombre</Label>
          </CheckGroup>
          <CheckGroup>
            <Input type="checkbox" />
            <Label >Mujer</Label>
          </CheckGroup>
        </LayoutCheck>
      </ContainCheck>


      <LayoutButtonSend>
        <CheckGroup>
          <Input type="checkbox" />
          <P color='white'>Aceptas <A>Tratamiento de Datos Personales</A> y <A>Términos y Condiciones</A></P>
        </CheckGroup>
        <Button>Suscribirme</Button>
      </LayoutButtonSend>

    </LayoutNewsletter>
  )
}
