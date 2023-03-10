import { H3, H4 } from 'src/styled-components';
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
  margin-bottom: .5rem;
`;

export const Title = styled(H3)`
  color: var(--theme-secundary);
  font-size: 1.55rem;
  margin: 0;
  letter-spacing: .4rem;
  font-weight: 600;
  `;

export const LinkShowMore = styled.a`
  cursor: pointer;
  color: black;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: normal;
`;

export const Item = styled(H4)`
  cursor: pointer;
  font-weight: normal;
  width: fit-content;
  padding-inline: .2rem;
  position: relative;

  &:hover::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: var(--theme-secundary);
    animation: fill 0.3s linear forwards;
  }

  @keyframes fill {
    to {
      width: 100%;
    }
  }
`;