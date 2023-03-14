import styled from 'styled-components';

interface Props {
  isMobile?: boolean
}

export const LayaoutIcons = styled.header<Props>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: var(--theme-gray);
  flex-direction: ${props => props.isMobile ? "column" : "row"};
  align-items: flex-start;
`;