import styled from 'styled-components';

export const LayoutNavbar = styled.header`
  background-color: var(--theme-primary);
  position: sticky;
  top: 0;
  z-index: 999;
  height: 64px;
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