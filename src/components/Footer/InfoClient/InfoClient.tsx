import { mdiClipboardListOutline, mdiCubeSend, mdiPhoneOutline, mdiShieldLockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { P, Strong } from "src/styled-components";
import { ConatainItem, Dot, Item, ItemText, LayoutInfoCLient } from "./styled-components";

export default function InfoClient() {
  return (
    <LayoutInfoCLient>
      <ConatainItem>
        <Item>
          <Icon path={mdiShieldLockOutline} size={1.3} />
          <ItemText>
            <P size="1.2rem">Pagos</P>
            <Strong size="1.2rem">seguros</Strong>
          </ItemText>
        </Item>
      </ConatainItem>


      <ConatainItem>
        <Dot />
        <Item>
          <Icon path={mdiCubeSend} size={1.3} />
          <ItemText>
            <P size="1.2rem">Envio a <Strong size="1.2rem">todo</Strong></P>
            <Strong size="1.2rem">el país</Strong>
          </ItemText>
        </Item>
      </ConatainItem>

      <ConatainItem>
        <Dot />
        <Item>
          <Icon path={mdiPhoneOutline} size={1.3} />
          <ItemText>
            <P size="1.2rem">Atención al</P>
            <Strong size="1.2rem">cliente</Strong>
          </ItemText>
        </Item>
      </ConatainItem>

      <ConatainItem>
        <Dot />
        <Item>
          <Icon path={mdiCubeSend} size={1.3} rotate={180} />
          <ItemText>
            <P size="1.2rem">Devoluciones</P>
            <Strong size="1.2rem">gratuitas</Strong>
          </ItemText>
        </Item>
      </ConatainItem>

      <ConatainItem>
        <Dot />
        <Item>
          <Icon path={mdiClipboardListOutline} size={1.3} />
          <ItemText>
            <P size="1.2rem">Seguimiento</P>
            <Strong size="1.2rem">de pedido</Strong>
          </ItemText>
        </Item>
      </ConatainItem>

    </LayoutInfoCLient>
  )
}
