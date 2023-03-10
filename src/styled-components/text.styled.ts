import styled from 'styled-components';

interface Props {
  size?: string
}

export const H1 = styled.h1`
  color: black;
  margin: 0;
  font-size: 1.5rem;
`;
export const H2 = styled.h2`
  color: black;
  margin: 0;
  font-size: 1.25rem;
`;
export const H3 = styled.h3`
  color: black;
  margin: 0;
  font-size: 1.15rem;
`;
export const H4 = styled.h4`
  color: black;
  margin: 0;
  font-size: 1rem;
`;

export const P = styled.p<Props>`
  color: black;
  margin: 0;
  font-size: ${props => props.size ?? "1rem"};
  line-height: 1.5rem;
`;

export const Strong = styled.strong<Props>`
  color: black;
  margin: 0;
  font-size: ${props => props.size ?? "1rem"};
  line-height: 1.5rem;
`;