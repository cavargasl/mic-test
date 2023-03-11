import styled from 'styled-components';

interface Props {
  primary?: boolean;
  secundary?: boolean;
}

export const Button = styled.button<Props>`
  ${props => !props.secundary ? "background-color: var(--theme-secundary)" : "background-color: var(--theme-primary)"};
  ${props => !props.secundary ? "color: var(--theme-primary)" : "color: white"};
  font-weight: 600;
  letter-spacing: .3rem;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
`;