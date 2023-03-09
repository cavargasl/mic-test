import styled from 'styled-components';

export const Image = styled.img.attrs(props => ({
  alt: props.alt,
  src: props.src
}))`
  width: 100%;
  object-fit: cover;
`;