import { useEffect } from "react";
import styled from "styled-components";
import Head from "components/Head";
import Imago from "public/assets/img/layout/logos/dfiimago.svg";

function Index(props) {
  return (
    <>
      <Head
        title={"Deep Future Institute"}
        canonical={"https://deepfuture.institute"}
        lang={props.lang}
      />
      <Land id="land">
        <LandContainer>
          <Imago />
          <p>Sitio en construcción</p>
        </LandContainer>
      </Land>
      <Intro id="removeArrow"></Intro>
    </>
  );
}

export default React.memo(Index);

const Land = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4%;
  grid-gap: 2.2rem;
  align-items: center;
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / span 12;
  svg {
    max-width: 100px;
    margin-bottom: 30px;
  }
  p {
    font-size: 1.8rem;
    opacity: 0.6;
    font-weight: 400;
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.3s ease all;
`;
