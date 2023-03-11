import { H1, H4, P } from 'src/styled-components';
import styled from 'styled-components';

export const LayoutNewsletter = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--theme-primary);
  padding: 3rem 8rem;
  gap: 2rem;
`;

export const TitleNewsletter = styled.span`
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Text = styled(P)`
  color: white;
  text-align: center;
`;

export const LayoutInputs = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
`;

export const ContainCheck = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
`;
export const LayoutCheck = styled.div`
  display: flex;
  gap: 1rem;
`;
export const CheckGroup = styled.div`
  display: flex;
  gap: .5rem;
`;

export const LayoutButtonSend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 70rem) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;