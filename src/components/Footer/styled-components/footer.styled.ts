import { Image, P } from 'src/styled-components';
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

export const PaymentMethods = styled(Image)`
  max-width: 70%;
  margin: 0 auto;

  @media only screen and (max-width: 70rem) {
    max-width: 90%;
  }
`;

export const BannerFooter = styled.div`
  margin: 2rem 0;
  background-color: var(--theme-secundary);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: .5rem;
  flex-wrap: wrap;
`;

export const BannerText = styled(P)`
  color: white;
  font-weight: 600;
`;