import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
`;
export const Input = styled.input.attrs(props => ({
  type: props.type || "text",
  size: props.size || "1rem",
}))`
  font-size: ${props => props.size};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  outline: none;
  padding: 0.2rem .8rem;
  margin: 0;
`;

export const Label = styled.label`
  color: white;
  font-weight: 700;
`;