import { A, H3 } from 'src/styled-components';
import styled from 'styled-components';

export const LayoutInfo = styled.section`
  padding: 2rem 1rem 4rem;
  border-top: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(214px, 1fr));
  /* display: flex;
  flex-wrap: wrap; */
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoItemTitle = styled(H3)`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const CaontainIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconLink = styled(A)`
  color: var(--theme-gray);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const ContainLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const Link = styled(A)`
  color: var(--theme-gray);
  text-decoration: none;
  font-weight: 500;
`;