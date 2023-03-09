import { SearchInput } from './styled-components'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

export default function Search() {
  return (
    <SearchInput>
      <span style={{ whiteSpace: "nowrap" }}>Encuentra tu preferido</span>
      <Icon path={mdiMagnify} size={"15px"} />
    </SearchInput>
  )
}
