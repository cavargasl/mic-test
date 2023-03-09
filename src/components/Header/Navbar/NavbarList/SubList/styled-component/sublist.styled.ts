import styled from 'styled-components';

export const LayoutSubList = styled.div`
  background-color: white;
  padding: 1rem 1.5rem;
  position: absolute;
  top: 100%;
  width: 100%;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const LayoutTitle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: .5rem;
`;

export const P = styled.p`
  color: black;
  margin: 0;
  cursor: pointer;
`;

export const Title = styled.h3`
  color: var(--theme-secundary);
  font-size: 1.5rem;
  margin: 0;
  letter-spacing: .4rem;
`;