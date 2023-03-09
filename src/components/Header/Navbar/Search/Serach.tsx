import { SearchInput } from './styled-components'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

export default function Serach() {
  return (
    <SearchInput>
      <span>Encuentra tu preferido</span>
      <Icon path={mdiMagnify} size={"15px"} />
    </SearchInput>
  )
}
