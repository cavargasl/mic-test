import styled from 'styled-components';

export const LayoutFooter = styled.footer`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 1440px) {
    width: 70%;
  }
  @media only screen and (max-width: 1235px) {
    width: 80%;
  }
`;