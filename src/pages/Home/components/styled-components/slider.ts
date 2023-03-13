import { H3, P } from 'src/styled-components';
import styled from 'styled-components';

interface Props {
  size?: string
}
export const LayoutSlider = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: black;
`;

export const TitleSlider = styled(H3)`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  gap: .5rem;
`;
export const TitleStrong = styled.span`
  font-weight: 800;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const LayoutPrice = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`
export const OfferPrice = styled(P)`
  color: var(--theme-gray);
  text-decoration: line-through;
`
export const Price = styled(P)<Props>`
  font-weight: 800;
  font-size: ${props => props.size || "1.2rem"};
`