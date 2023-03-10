import styled from 'styled-components';

export const LayoutInfoCLient = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const ConatainItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  position: relative;
`;

export const Item = styled.div`
  display: flex;
  color: black;
  gap: 1rem;
`;
export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dot = styled.span`
  content: "";
  width: 10px;
  height: 10px;
  background-color: var(--theme-secundary);
  border-radius: 100%;
  margin-right: 1.5rem;
  position: absolute;
  left: -5px;
`;