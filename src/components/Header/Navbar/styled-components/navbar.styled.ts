import styled from 'styled-components';

export const LayoutNavbar = styled.header`
  background-color: var(--theme-primary);
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
`;

export const NavbarList = styled.ul`
  display: flex;
  gap: 2vw;
  margin: 0;
`;
export const NavbarItems = styled.li`
  list-style: none;
  text-transform: uppercase;
  letter-spacing: .4em;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 1rem 0;
`;