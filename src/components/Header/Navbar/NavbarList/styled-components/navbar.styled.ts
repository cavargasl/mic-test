import styled from 'styled-components';

export const LayoutNavbarList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 2vw;
  margin: 0;
  height: 100%;
  cursor: pointer;
`;
export const NavbarItems = styled.li`
  list-style: none;
  text-transform: uppercase;
  letter-spacing: .4em;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  &:hover {
    color: var(--theme-secundary);
  }
`;