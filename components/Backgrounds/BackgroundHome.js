import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Eye from "public/assets/img/layout/eye.svg";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 11}px,${y / 10}px,0)`;

function BackgroundCovid() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Bg onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <div>
        <Eye />
      </div>
      <animated.div style={{ transform: props.xy.interpolate(trans1) }} />
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
        /* width: 100%; */
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
`;
