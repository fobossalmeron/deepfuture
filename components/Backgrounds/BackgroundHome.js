import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Eye from "public/assets/img/layout/eye.svg";
import EyeComplete from "public/assets/img/layout/eyeComplete.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 10}px,0)`;

function BackgroundCovid() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth > 700 ? false : true);
  }, []);
  return (
    <Bg onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      {mobile ? (
        <div>
          <EyeComplete />
        </div>
      ) : (
        <>
          <div>
            <Eye />
          </div>
          <animated.div style={{ transform: props.xy.interpolate(trans1) }} />
        </>
      )}
    </Bg>
  );
}

export default BackgroundCovid;

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  top: 70px;
  position: absolute;
  div {
    :nth-of-type(1) {
      width: 100%;
      height: 100%;
      position: relative;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-items: center;
      svg {
        height: 100%;
        max-width: 1500px;
        margin: 0 auto;
      }
    }
    :nth-of-type(2) {
      box-shadow: ${(props) =>
        `inset -10px -10px 20px rgba(115, 154, 228, 0.23), 
    inset 10px 10px 20px ${props.theme.colors.darkshadow}`};
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.background};
      position: absolute;
      height: 0;
      width: 25%;
      padding-bottom: 25%;
      top: 0;
      margin-top: 10%;
      right: 38%;
    }
  }
  @media (max-width: 1450px) {
    div:nth-of-type(2) {
      margin-top: 12%;
      padding-bottom: 30%;
      width: 30%;
      right: 33%;
    }
  }
  @media (max-width: 1250px) {
    div:nth-of-type(2) {
      margin-top: 20%;
    }
  }
  @media (max-width: 1000px) {
    div:nth-of-type(2) {
      margin-top: 30%;
      padding-bottom: 35%;
      width: 35%;
      right: 30%;
    }
  }
  @media (max-width: 800px) {
    div:nth-of-type(2) {
      margin-top: 36%;
    }
  }
  @media (max-width: 750px) {
    div:nth-of-type(2) {
      margin-top: 42%;
    }
  }
  @media (max-width: 650px) {
    height: 300px;
    top: 100px;
  }
`;
