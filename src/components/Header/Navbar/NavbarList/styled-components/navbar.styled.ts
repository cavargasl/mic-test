import { H3 } from 'src/styled-components';
import styled from 'styled-components';

export const LayoutNavbarList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 3vw;
  margin: 0;
  height: 100%;
`;
export const NavbarItems = styled.li`
  list-style: none;
  height: 100%;
  position: relative;
`;

export const Item = styled(H3)`
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  letter-spacing: .4rem;
  white-space: nowrap;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: var(--theme-secundary);
  }
`;