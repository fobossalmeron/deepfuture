import { useEffect } from "react";
import styled from "styled-components";
import { H1, H2 } from "components/shared/Dangerously";
import Head from "components/Head";
import Imago from "public/assets/img/layout/logos/dfiimago.svg"

function Index(props) {
  // let t = props.locale.home_page;

  useEffect(() => {
    props.setTitle("Deep Future Institute");
  }, []);

  return (
    <>
        <Head
          title={"Deep Future Institute"}
          canonical={"https://deepfuture.institute"}
          lang={props.lang}
        />
        <Land id="land">
          <LandContainer>
            <Imago/>
            <p>Sitio en construcción</p>
          </LandContainer>
        </Land>
        <Intro id="removeArrow">
        </Intro>
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
  h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    color: ${props => props.theme.colors.white};
  }
  h1 {
    color: ${props => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 830px;
  }
  @media (max-width: 1115px) {
    h1 {
      font-size: 6.7rem;
    }
  }
  @media (max-width: 1070px) {
    h1 {
      font-size: 6.4rem;
    }
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 6.2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 5.9rem;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 520px) {
    h1 {
      max-width: 300px;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 3.35rem;
      max-width: 250px;
    }
    h2 {
      font-size: 1.6rem;
      max-width: 240px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  grid-column: 1 / span 12;
  svg{
    max-width:100px;
    margin-bottom:30px;
  }
  p{
    font-size:3rem;
    opacity:0.6;
    font-weight:400;
  }
`;

const Intro = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
`;
