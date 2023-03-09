import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import { SearchInput } from './styled-components'

export default function SearchMobile() {
  return (
    <SearchInput isMobile>
      <Icon path={mdiMagnify} size={"15px"} />
    </SearchInput>
  )
}
