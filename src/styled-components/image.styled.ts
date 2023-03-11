import styled from 'styled-components';

export const Image = styled.img.attrs(props => ({
  alt: props.alt,
  src: props.src,
  with: props.width || "100%"
}))`
  width: ${props => props.width};
  object-fit: contain;
`;