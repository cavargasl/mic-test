import styled from 'styled-components';
interface Props {
  isMobile?: boolean
}
export const SearchInput = styled.div<Props>`
  border-bottom: ${props => props.isMobile ? "none" : "1px solid white"};
  padding: 0.4rem .4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
`;