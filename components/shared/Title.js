import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Fade from "react-reveal/Fade";

function Title(props) {
  return (
      <MainGrid notoppadding={props.notoppadding}>
        <TitlePlaced>
          <Fade>
          {props.children}
          </Fade>
        </TitlePlaced>
      </MainGrid>
  );
}

export default Title;

const TitlePlaced = styled.div`
  grid-column: 2 / span 11;
`;
