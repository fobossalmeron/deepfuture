import { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10 + 30}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 350}px,${y / 8 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 6.5}px,0)`;

function LandBg() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Bg onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div style={{ transform: props.xy.interpolate(trans4) }} />
    </Bg>
  );
}

export default LandBg;

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  div {
    box-shadow: ${(props) =>
      `-10px -10px 20px ${props.theme.colors.darklight}, 
    10px 10px 20px ${props.theme.colors.darkshadow}`};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background};
    position: absolute;
    height: 0;
    :nth-of-type(1) {
      width: 47%;
      padding-bottom: 47%;
      top: 15%;
      left: 20%;
    }
    :nth-of-type(2) {
      width: 15%;
      padding-bottom: 15%;
      top: 40%;
      right: 10%;
    }
    :nth-of-type(3) {
      width: 10%;
      padding-bottom: 10%;
      top: 78%;
      left: 48%;
    }
    :nth-of-type(4) {
      width: 5%;
      padding-bottom: 5%;
      top: 35%;
      left: 35%;
    }
  }
`;
