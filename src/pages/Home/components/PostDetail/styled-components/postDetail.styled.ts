import { Button, H2, H3, Span } from 'src/styled-components';
import styled from 'styled-components';


export const LayoutPostDetail = styled.section`
  display: grid;
  grid-template-columns: 1fr 384px;
  gap: 6rem;
  @media only screen and (max-width: 1350px) {
    grid-template-columns: 1fr;
  }
`;
export const LayoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const Description = styled(H3)`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.6rem;
`
export const Title = styled(H2)`
  font-size: 1.2rem;
  font-weight: normal;
  text-transform: uppercase;
  color: var(--theme-gray);
`

export const ContainRef = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  position: relative;
`

export const Ref = styled(Span)`
  color: var(--theme-gray);
`
export const ContainOffer = styled.div`
  right: 0;
  top: .2rem;
  position: absolute;
`

export const LayoutSizes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 4rem;
`
export const ContainSizes = styled.div`
  display: flex;
  gap: 2rem;
  `
export const Sizes = styled(Span)`
  color: black;
  cursor: pointer;
`
export const HelpSizes = styled(Span)`
  color: black;
  cursor: pointer;
  text-decoration: underline;
`
export const LayoutAddToCart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
`
export const AddToCart = styled(Button)`
  letter-spacing: .2rem;
  white-space: nowrap;
`