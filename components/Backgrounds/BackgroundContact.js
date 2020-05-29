import { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 10}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 9 - 50}px,${y / 8 - 200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10 + 30}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 9 - 50}px,${y / 8 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 8}px,${y / 6.5}px,0)`;

function BackgroundContact() {
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

export default BackgroundContact;

const Bg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  div {
    box-shadow: ${(props) =>
      `-10px -10px 20px rgba(115, 154, 228, 0.14), 
    10px 10px 20px ${props.theme.colors.darkshadow}`};
    background-color: ${(props) => props.theme.colors.background};
    position: absolute;
    height: 100px;
    border-radius: 10px;
    width: 600px;
    left: 55%;
    :nth-of-type(1) {
      top: 40%;
    }
    :nth-of-type(2) {
      top: 61%;
      left: 50.5%;
    }
    :nth-of-type(3) {
      top: 75%;
    }
    :nth-of-type(4) {
      top: 69%;
      left: 52%;
    }
  }
`;
