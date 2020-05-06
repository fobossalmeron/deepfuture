import styled from "styled-components";
import { H3, P } from "components/shared/Dangerously";
import Fade from "react-reveal/Fade";

function DataItem({ item, columns, light, dark }) {
  function IconFaded() {
    return (
      <Fade>
        <Icon light={light} dark={dark}>
          {item.icon}
        </Icon>
      </Fade>
    );
  }

  return (
    <>
      {!dark && (
        <Column>
          <IconFaded />
        </Column>
      )}
      <ColumnSecond columns={columns}>
        {dark && (
          <Column>
            <IconFaded />
          </Column>
        )}
        <H3>{item.title}</H3>
        <P>{item.description}</P>
      </ColumnSecond>
    </>
  );
}

export default DataItem;

const Column = styled.div`
  grid-column-end: span 1;
`;

const Icon = styled.div`
width:100px;
height:100px;
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
  margin-bottom:10%;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    .mutant {
      fill: ${(props) =>
        props.light
          ? props.theme.colors.background
          : props.theme.colors.foreground};
    }
  }
`;

const ColumnSecond = styled.div`
  /* div {
    height: 30px;
    width: 30px;
    display: none;
    :nth-of-type(1) {
      background-color: ${(props) => props.theme.colors.darklight};
    }
    :nth-of-type(2) {
      background-color: ${(props) => props.theme.colors.darkshadow};
    }
  } */
  grid-column-end: ${(props) => "span " + props.columns};
  h3 {
    font-size: 2.3rem;
    margin-bottom: 17px;
  }
  p {
    max-width: 340px;
  }
`;
