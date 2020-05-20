import { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Head from "components/Head";
import FormComplete from "components/FormComplete";
import MainGrid from "components/shared/MainGrid";
import DataItemsWhite from "components/DataItemsWhite";
import DataItemsDark from "components/DataItemsDark";
import SalesPopup from "components/SalesPopup";
import Title from "components/shared/Title";
import LandBg from "components/LandBg";
import Quote from "components/Quote";
import PayPopup from "components/PayPopup";
import Tiers from "components/Tiers/Tiers";

function Index(props) {
  const [showPay, setShowPay] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [product, setProduct] = useState(null);

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
        <FormComplete production={props.production} centered collectorId="LandingCollector" />
      </Land>
      <Intro>
        <DataItemsWhite />
        <Quote />
      </Intro>
      <Tiers
        setShowSales={setShowSales}
        setShowPay={setShowPay}
        setProduct={setProduct}
      />
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
          <FormComplete production={props.production} collectorId="TiersCollector" />
        </SecondFormGrid>
      </SecondForm>
      <DataItemsDark />
      <Title notoppadding>
        <p>
          La estrategia de hoy es <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <LastForm>
        <FormComplete production={props.production} centered collectorId="FooterCollector" />
      </LastForm>
      <PayPopup showPay={showPay} setShowPay={setShowPay} product={product} />
      <SalesPopup showSales={showSales} setShowSales={setShowSales} />
    </>
  );
}

export default React.memo(Index);

const LastForm = styled(MainGrid)`
  padding-bottom: 6%;
  @media (max-width: 950px) {
    padding-bottom: 0;
  }
`;

const Land = styled(MainGrid)`
  min-height: 100vh;
  padding-bottom: 6%;
  align-items: center;
  padding-top: 13%;
  pointer-events: none;
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 880px;
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
  @media (max-width: 1100px) {
    #landtext {
      h1 {
        font-size: 4rem;
        max-width: 760px;
      }
      h2 {
        font-size: 2.1rem;
        max-width: 530px;
      }
    }
  }
  @media (max-width: 950px) {
    #landtext {
      grid-column: 1 / span 12;
      h1 {
        font-size: 3.5rem;
        max-width: 660px;
      }
      h2 {
        font-size: 2rem;
        max-width: 530px;
      }
    }
  }
  @media (max-width: 600px) {
    #landtext {
      padding-top: 100px;
      h1 {
        font-size: 3rem;
        max-width: 660px;
      }
      h2 {
        font-size: 1.8rem;
        max-width: 530px;
      }
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
  padding-bottom: 6%;
  @media(max-width:900px){
    padding-bottom:35px;
  }
`;

const SecondFormGrid = styled(MainGrid)`
  & > div:nth-of-type(1) {
    grid-column: 2 / span 3;
    max-width: 340px;
    h5 {
      font-size: 3.6rem;
      font-weight: 400;
      margin: 0px 0px 20px 0px;
      b {
        font-weight: 500;
      }
    }
  }
  @media (max-width: 1350px) {
    & > div:nth-of-type(1) {
      grid-column: 1 / span 4;
      max-width: 330px;
      padding-right: 10px;

      h5 {
        font-size: 3rem;
      }
    }
    div:nth-of-type(2) {
      grid-column: 5 / span 8;
    }
  }
  @media (max-width: 900px) {
    div:nth-of-type(1) {
      grid-column: 1 / span 12;
      max-width: unset;
      p {
        max-width: 500px;
        margin-bottom: 30px;
      }
    }
    div:nth-of-type(2) {
      grid-column: 1 / span 12;
      p {
        max-width: 300px;
      }
    }
  }
`;
