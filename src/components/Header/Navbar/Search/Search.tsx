import { SearchInput } from './styled-components'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

interface Props {
  isMobile?: boolean
}
export default function Search({ isMobile }: Props) {
  if (isMobile) return (
    <SearchInput isMobile>
      <Icon path={mdiMagnify} size={"15px"} />
    </SearchInput>
  )
  return (
    <SearchInput>
      <span style={{ whiteSpace: "nowrap" }}>Encuentra tu preferido</span>
      <Icon path={mdiMagnify} size={"15px"} />
    </SearchInput>
  )
}
