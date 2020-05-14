import styled from "styled-components";

const CircleIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.light
      ? props.theme.colors.foreground
      : props.theme.colors.background};
  box-shadow: ${(props) =>
    props.light
      ? `-2px -4px 11px ${props.theme.colors.lightlight},
    2px 2px 4px ${props.theme.colors.lightshadow}`
      : `-5px -5px 7px ${props.theme.colors.darklight}, 
    5px 5px 7px ${props.theme.colors.darkshadow}`};
  position: relative;
  margin-bottom: 10%;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width:100%;
    height:100%;
    .mutant-stroke {
      stroke: ${(props) =>
        props.light
          ? props.theme.colors.background
          : props.theme.colors.foreground};
    }
    .mutant-fill {
      fill: ${(props) =>
        props.light
          ? props.theme.colors.background
          : props.theme.colors.foreground};
    }
  }
`;

export default CircleIcon;
