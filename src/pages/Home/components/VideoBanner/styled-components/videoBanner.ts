import styled from 'styled-components';


export const LayoutVideoBanner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainVideos = styled.div`
  position: relative;
  width: 25rem;
  cursor: pointer;

  &[data-state~="fullVideo"] {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 20vmin;
    background: #000c;
    animation: fade-in 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &[data-state~="fullVideo"]:after {
    opacity: 0;
    display: none;
    pointer-events: none;
  }

  &:after {
    content: "";
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0004;
  }
`

export const Video = styled.video`
  width: 100%;
  box-shadow: 0 1rem 2rem #0007;
`