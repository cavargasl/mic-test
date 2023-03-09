import { Image } from 'src/styled-components/image.styled';
import styled from 'styled-components';

export const Banner = styled(Image)`
  display: flex;
  
  @media only screen and (max-width: 70rem) {
    display: none;
  }
`;