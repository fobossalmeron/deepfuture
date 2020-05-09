import { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Head from "components/Head";
import FormComplete from "components/FormComplete";
import MainGrid from "components/shared/MainGrid";
import DataItemsWhite from "components/DataItemsWhite";
import DataItemsDark from "components/DataItemsDark";
import Title from "components/shared/Title";
import LandBg from "components/LandBg";
import Quote from "components/Quote";

import Tiers from "components/Tiers";

function Index(props) {
  return (
    <>
      <Head
        title={"Deep Future Institute"}
        canonical={"https://deepfuture.institute"}
        lang={props.lang}
      />
      <LandBg />
      <Land id="land">
        <div id="landtext">
          <h1>
            Genera <b>certidumbre</b> en la crisis económica del COVID-19 y la
            4T en México
          </h1>
          <h2>
            Facilita la toma de <b>decisiones</b> y minimiza el <b>riesgo</b> de
            tu negocio u organización en el <b>futuro</b> con este taller
            autogestivo o guiado por expertos
          </h2>
        </div>
        <FormComplete centered />
      </Land>
      <Intro>
        <DataItemsWhite />
        <Quote />
      </Intro>
      <Tiers />
      <SecondForm>
        <SecondFormGrid>
          <Fade>
            <div>
              <h5>
                Prueba un poco de lo que <b>ofrecemos</b>
              </h5>
              <p>
                Analizar los escenarios que podrían ocurrir a corto y largo
                plazo te ayudará a organizar la información que necesitas para
                enfrentar nuevas problemáticas y reducir riesgos.
              </p>
            </div>
          </Fade>
          <FormComplete />
        </SecondFormGrid>
      </SecondForm>
      <DataItemsDark />
      <Title>
        <p>
          La estrategia de hoy es <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <MainGrid notoppadding>
        <FormComplete centered />
      </MainGrid>
    </>
  );
}

export default React.memo(Index);

const Land = styled(MainGrid)`
  min-height: 100vh;
  align-items: center;
  padding-top: 13%;
  pointer-events: none;
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 870px;
      grid-column: 2 / span 8;
      b {
        font-weight: 500;
      }
    }
    h2 {
      font-size: 2.55rem;
      line-height: 135%;
      max-width: 650px;
      margin-top: 0;
    }
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
`;

const SecondForm = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;

  #quote {
    text-align: center;
  }
`;

const SecondFormGrid = styled(MainGrid)`
  div:nth-of-type(1) {
    grid-column: 2 / span 3;
    h5 {
      font-size: 3.6rem;
      font-weight: 400;
      margin: 0px 0px 20px 0px;
      b {
        font-weight: 500;
      }
    }
  }
`;
