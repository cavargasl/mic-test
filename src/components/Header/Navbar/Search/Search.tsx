import { SearchInput } from './styled-components'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { Text } from '@chakra-ui/react';

export default function Search() {
  return (
    <SearchInput >
      <Text as="span" whiteSpace={"nowrap"} color="white">Encuentra tu preferido</Text>
      <Icon path={mdiMagnify} size={"15px"} color='white' />
    </SearchInput>
  )
}
