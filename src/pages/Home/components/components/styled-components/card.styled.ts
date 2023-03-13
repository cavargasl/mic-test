import { H3, P } from 'src/styled-components';
import styled from 'styled-components';

export const LayoutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  min-width: 184px;
  height: 100%;
  justify-content: space-between;
`;

export const LayoutImage = styled.div`
  position: relative;
  padding: .2rem;
`
export const Offert = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: .4rem;
  background-color: #f0f;
  color: white;
  font-weight: 800;
  border-radius: 4px;
`
export const New = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: .4rem .6rem;
  background-color: black;
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: .7rem;
`

export const Title = styled(H3)`
  color: var(--theme-gray);
`
export const Description = styled(P)`
  
`

export const LayoutPrice = styled.div`
  display: flex;
  gap: 1rem;
`
export const OfferPrice = styled(P)`
  color: var(--theme-gray);
  text-decoration: line-through;
`
export const Price = styled(P)`
  font-weight: 800;
  font-size: 1.2rem;
`