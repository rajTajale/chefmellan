import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/hero-wave2.svg" style={{ top: "350px", filter: `blur(0px)`}} />
      <Wave src="/images/hero-wave3.svg" style={{ top: "350px", filter: `blur(40px)`}} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 800px;
  background: #4ac29a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f7f3ef,
    #93f9b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f7f3ef,
    #93f9b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  z-index: -1;
`;
