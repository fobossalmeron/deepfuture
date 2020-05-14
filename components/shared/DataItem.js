import styled from "styled-components";
import { H3, P } from "components/shared/Dangerously";
import Fade from "react-reveal/Fade";
import CircleIcon from "components/shared/CircleIcon";

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

const Icon = styled(CircleIcon)`
width:100px;
height:100px;
  margin-bottom:10%;
  svg{
    padding:22%;
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
