import styled from 'styled-components';

export const LayoutNavbar = styled.header`
  background-color: var(--theme-primary);
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  gap: 1rem;
  @media only screen and (max-width: 1400px) {
    padding-inline: 6%;
  }
  @media only screen and (max-width: 1230px) {
    padding-inline: 3%;
  }
`;

export const NavbarList = styled.ul`
  padding: 0;
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
  padding: 1.43rem 0;
  cursor: pointer;
  position: relative;
  &:hover {
    color: var(--theme-secundary);
  }
`;