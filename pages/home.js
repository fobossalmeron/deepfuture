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
import BackgroundHome from "components/BackgroundHome";
import Quote from "components/Quote";
import PayPopup from "components/PayPopup";
import Tiers from "components/Tiers/Tiers";
import LinkToCovid from "components/LinkToCovid";
import DFIFull from "public/assets/img/layout/logos/dfifull.svg";

function Home(props) {
  const [showSales, setShowSales] = useState(false);
  const [product, setProduct] = useState(null);

  return (
    <>
      <Head
        title={"Deep Future Institute: Investigación y talleres de prospectiva"}
        description={
          "Prepárate para el futuro: Facilita la toma de decisiones y minimiza el riesgo de tu negocio u organización."
        }
        canonical={"https://deepfuture.institute"}
        lang={props.lang}
      />
      <BackgroundHome />
      <Land id="land">
        <div id="landtext">
          <h1>
            Prepárate ante escenarios <b>futuros </b>
            de <b>incertidumbre</b>
          </h1>
          <h2>
            Anticipa los hechos que <b>afectan</b> a tu organización para
            aprovechar mejor las <b>oportunidades</b> y minimizar la exposición
            al <b>riesgo</b>
          </h2>
        </div>
        <LinkToCovid />
        <DFIFull/>
      </Land>
      <Intro>
        <h2>Asesorado por expertos con +30 años de experiencia haciendo prospectiva</h2>
        <p>Evaluamos los hechos del mundo en busca de indicios que puedan tener un impacto en el curso de tu trabajo. Trabajamos de la mano con:</p>
        <ul>
          <li>Emprendedores de negocios</li>
          <li>Inversionistas de capital</li>
          <li>Empresas medianas</li>
          <li>Corporativos</li>
        </ul>
      </Intro>
      <Tiers setShowSales={setShowSales} setProduct={setProduct} />
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
          <FormComplete
            production={props.production}
            collectorId="TiersCollector"
          />
        </SecondFormGrid>
      </SecondForm>
      <DataItemsDark />
      <Title notoppadding>
        <p>
          La estrategia de hoy es mucho más que <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <LastForm>
        <FormComplete
          production={props.production}
          centered
          collectorId="FooterCollector"
        />
      </LastForm>
      <SalesPopup showSales={showSales} setShowSales={setShowSales} />
    </>
  );
}

export default React.memo(Home);

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
  padding-top: 8%;
  pointer-events: none;
  align-items: flex-start;
  svg{
    max-width: 320px;
    width: 100%;
    grid-column: 1 / span 12;
    justify-self: flex-end;
    padding-top:5%;
  }
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
      font-weight: 300;
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
  @media (max-width: 900px) {
    padding-bottom: 35px;
  }
`;

const SecondFormGrid = styled(MainGrid)`
  & > div:nth-of-type(1) {
    grid-column: 2 / span 3;
    max-width: 340px;
    h5 {
      font-size: 3.6rem;
      margin: 0px 0px 20px 0px;
      b {
        font-weight: 400;
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
