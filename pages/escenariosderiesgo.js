import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import Fade from "react-reveal/Fade";
import Head from "components/Head";
import FormEscenarios from "components/FormEscenarios";
import MainGrid from "components/shared/MainGrid";
import EscenariosItemsDark from "components/IconItems/EscenariosItemsDark";
import EscenariosItemsWhite from "components/IconItems/EscenariosItemsWhite";
import SalesPopup from "components/SalesPopup";
import Title from "components/shared/Title";
import BackgroundEscenarios from "components/Backgrounds/BackgroundEscenarios";
import Quote from "components/Quote";
import SingleProduct from "components/Products/SingleProduct";

function Escenarios(props) {
  const [showSales, setShowSales] = useState(false);
  const [product, setProduct] = useState(null);
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head
        title={"Escenarios de riesgo en tiempos de la 4T en México"}
        description={
          "Prepárate para el futuro: Facilita la toma de decisiones y minimiza el riesgo de tu negocio u organización en tiempos de la 4T."
        }
        canonical={"https://deepfuture.institute/escenariosderiesgo"}
        lang={props.lang}
      />
      <BackgroundEscenarios />
      <Land id="land">
        <div id="landtext">
          <h3>
            Prepárate para una <b>década</b> <br />
            marcada por la <b>incertidumbre</b>
          </h3>
          <h1>
            Escenarios de riesgo en tiempos de la cuarta transformación de
            México
          </h1>
          <h2>
            Encuentra en este <b>estudio prospectivo</b> las tendencias
            económicas, sociales, ambientales y políticas de México a
            <b> diez años</b> (2020-2030)
          </h2>
        </div>
        <FormEscenarios
          production={props.production}
          centered
          collectorId="EscenariosCollector"
        />
      </Land>
      <Intro>
        <IntroGrid>
          <h2>
            Toma las mejores <b>decisiones </b>
            para tu <b>organización</b>
          </h2>
          <p>
            La incertidumbre que vives como líder reduce la efectividad de tus
            decisiones y transmite inseguridad. Este estudio te ayudará a
            conocer los elementos que ponen en riesgo a:
          </p>
        </IntroGrid>
        <EscenariosItemsWhite />
        <Quote
          quote={`Aquí queremos poner otra cita de algún director de 
          institución / medios / etc`}
          name={"Jorge Milke"}
          position={"Senior Manager, Deloitte"}
          img={"/assets/img/layout/profile.jpg"}
          color={theme.colors.escenarios.accent}
        />
      </Intro>
      <SecondForm>
        <SecondFormGrid>
          <Fade>
            <div>
              <h5>
                Gestiona la <b>incertidumbre</b> en escenarios <b>complejos</b>
              </h5>
              <ul>
                <li>
                  Repiensa tu estrategia empresarial con información válida
                </li>
                <li>
                  Nuestro equipo cuenta con más de 30 años de experiencia
                  haciendo Prospectiva en México y el mundo
                </li>
                <li>Prepárate para el futuro</li>
                <li>
                  La información de nuestro estudio es y será vigente durante
                  toda esta década (2020-2030)
                </li>
              </ul>
            </div>
          </Fade>
          <SingleProduct
            title="Escenarios De Riesgo En Tiempos De La Cuarta Transformación De México"
            type="Estudio"
            id="Estudio"
            description="Nuestro más reciente trabajo de investigación es un estudio de prospectiva a 10 años (2019-2030) que analiza la vida económica, social, ambiental y política del México en el presente y futuro. Todos los talleres que impartimos utilizan la información de este estudio para tener una perspectiva holística del país a corto y largo plazo."
            setShowSales={setShowSales}
            setProduct={setProduct}
            buttonColor={theme.colors.escenarios.accent}
          />
        </SecondFormGrid>
      </SecondForm>
      <EscenariosItemsDark />
      <LastPiece>
        <Title notoppadding>
          <p>
            La estrategia de hoy es mucho más que <b>sobrevivir</b>
          </p>
          <h3>
            Anticipa los <b>riesgos</b> y <b>oportunidades </b>
            con la <b>mejor</b> información
          </h3>
        </Title>
      </LastPiece>
      <LastForm>
        <FormEscenarios
          production={props.production}
          second
          collectorId="FooterEscenariosCollector"
        />
      </LastForm>
      <SalesPopup
        showSales={showSales}
        product={product}
        setShowSales={setShowSales}
        color={theme.colors.escenarios.accent}
      />
    </>
  );
}

export default React.memo(Escenarios);

const LastPiece = styled.div`
  h3 {
    max-width: 800px;
  }
  @media (max-width: 1100px) {
    h3 {
      font-size: 3.4rem;
      max-width: 550px;
    }
  }
`;

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
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 880px;
      grid-column: 2 / span 8;
      font-weight: 100;
      font-style: italic;
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
    h3 {
      font-size: 2.55rem;
      line-height: 135%;
      padding-bottom: 20px;
      color: ${(props) => props.theme.colors.foreground};
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
  z-index:1;
`;

const IntroGrid = styled(MainGrid)`
  padding-top: 6%;
  h2 {
    grid-column: 2 / span 10;
    font-size: 4rem;
    max-width: 550px;
    font-weight: 300;
  }
  p {
    grid-column: 2 / span 10;
    max-width: 550px;
  }
  ul {
    grid-column: 2 / span 5;
    grid-row: 3;
    font-size: inherit;
    line-height: inherit;
  }
  img {
    grid-column: 6 / span 7;
    grid-row: 3;
    padding-top: 8%;
    max-width: 100%;
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 1000px) {
    grid-row-gap: 2rem;
  }
  @media (max-width: 950px) {
    h2 {
      font-size: 3rem;
      grid-column: 1 / span 12;
      max-width: 530px;
    }
    p {
      grid-column: 1 / span 12;
      max-width: 500px;
    }
    ul {
      grid-column: 1 / span 12;
    }
  }
  @media (max-width: 750px) {
    img {
      grid-column: 1 / span 12;
      position: relative;
      grid-row: 4 / span 1;
      padding-top: 10px;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 2.7rem;
    }
  }
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
  align-items: center;
  padding-top: 6%;
  & > div {
    &:nth-of-type(1) {
      grid-column: 2 / span 5;
      max-width: 430px;
      h5 {
        font-size: 3.6rem;
        margin: 0px 0px 20px 0px;
        font-weight: 300;
        b {
          font-weight: 500;
        }
      }
      li {
        display: block;
        margin-bottom: 5px;
        padding-bottom: 10px;
        &:before {
          content: " ";
          width: 10px;
          height: 10px;
          margin-top: 5px;
          border-radius: 100%;
          display: inline-block;
          margin-right: 10px;
          background-color: ${(props) => props.theme.colors.escenarios.accent};
        }
      }
    }
    &:nth-of-type(2) {
      grid-column: 7 / span 5;
      h2 {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 1350px) {
    & > div:nth-of-type(1) {
      /* grid-column: 1 / span 4;
      max-width: 330px;
      padding-right: 10px; */
      h5 {
        font-size: 3rem;
        max-width: 360px;
      }
    }
    div:nth-of-type(2) {
      /* grid-column: 5 / span 8; */
    }
  }
  @media (max-width: 950px) {
    div:nth-of-type(1) {
      grid-column: 1 / span 6;

      /* grid-column: 1 / span 12;
      max-width: unset; */
      p {
        /* max-width: 500px;
        margin-bottom: 30px; */
      }
    }
    div:nth-of-type(2) {
      grid-column: 7 / span 6;
      /* grid-column: 1 / span 12; */
    }
  }
  @media (max-width: 750px) {
    div:nth-of-type(1) {
      grid-column: 1 / span 12;
      grid-row-start: 1;
      max-width: unset;
      margin-top: 0;
      p {
        max-width: 500px;
        margin-bottom: 30px;
      }
    }
    div:nth-of-type(2) {
      grid-column: 1 / span 12;
      grid-row-start: 2;
      margin-bottom: 6%;
      p {
        max-width: 300px;
      }
    }
  }
`;
