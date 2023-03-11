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

export const DefaultP = styled.p.attrs(props => ({
  color: props.color || "black",
}))`
  color: ${props => props.color};
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const P = styled(DefaultP)<Props>`
  font-size: ${props => props.size};
`;

export const Strong = styled.strong<Props>`
  color: black;
  margin: 0;
  font-size: ${props => props.size ?? "1rem"};
  line-height: 1.5rem;
`;

export const A = styled.a`
  color: white;
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid white;
`;

export const Span = styled.span`
  color: white;
`;