import styled from "styled-components";
import { H3, P } from "components/shared/Dangerously";
import Fade from "react-reveal/Fade";

function DataItem({ item, columns }) {
  return (
    <>
      <Column>
        <Fade><div>{item.icon}</div></Fade>
      </Column>
      <ColumnSecond columns={columns}>
        <H3>{item.title}</H3>
        <P>{item.description}</P>
      </ColumnSecond>
    </>
  );
}

export default DataItem;

const Column = styled.div`
  grid-column-end: span 1;
  div{
    border-radius:50%;
    background-color: ${props => props.theme.colors.foreground};
    box-shadow: -2px -4px 11px rgba(255, 255, 255, 0.9), 2px 2px 4px rgba(77, 76, 90, 0.19);
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
    position:relative;
    svg{
      position:absolute;
      left:50%;
      top:50%;
      transform: translate3d(-50%,-50%,0);
    }
  }
`;

const ColumnSecond = styled.div`
  grid-column-end: ${props => "span " + props.columns};
  h3 {
    font-size: 2.3rem;
    margin-bottom:17px;
  }
  p{
    color: ${props => props.theme.colors.foreground_lowest};
  }
`;
