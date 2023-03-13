import { H3 } from 'src/styled-components';
import styled from 'styled-components';


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