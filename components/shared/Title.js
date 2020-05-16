import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Fade from "react-reveal/Fade";

function Title({ children, className }) {
  return (
    <MainGrid className={className}>
      <TitlePlaced>
        <Fade>{children}</Fade>
      </TitlePlaced>
    </MainGrid>
  );
}

export default Title;

const TitlePlaced = styled.div`
  grid-column: 2 / span 11;
  padding-bottom: 55px;
  @media (max-width: 1000px) {
    padding-bottom: 40px;
    h3 {
      font-size: 3rem;
    }
  }
  @media (max-width: 950px) {
    grid-column: 1 / span 12;
  }
  @media (max-width: 400px) {
    p {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 2.8rem;
    }
  }
`;
