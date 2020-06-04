import { useState } from "react";
import styled from "styled-components";
import Head from "components/Head";
import FormComplete from "components/FormComplete";
import MainGrid from "components/shared/MainGrid";
import HomeItemsDark from "components/IconItems/HomeItemsDark";
import SalesPopup from "components/SalesPopup";
import Title from "components/shared/Title";
import BackgroundHome from "components/Backgrounds/BackgroundHome";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Products from "components/Products/Products";
import LinkToCovid from "components/LinkToCovid";
import DFIFull from "public/assets/img/layout/logos/dfifull.svg";

function Home(props) {
  const [showSales, setShowSales] = useState(false);
  const [product, setProduct] = useState(null);
  const theme = useContext(ThemeContext);

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
            <br />
            de <b>incertidumbre</b>
          </h1>
          <h2>
            Anticipa los hechos que <b>afectan</b> a tu organización para
            aprovechar mejor las <b>oportunidades</b> y minimizar la exposición
            al <b>riesgo</b>
          </h2>
        </div>
        <LinkToCovid />
        <DFIFull />
      </Land>
      <Intro>
        <IntroGrid>
          <h2>
            Asesorado por <b>expertos</b> con +30 años de experiencia haciendo
            <b> prospectiva</b>
          </h2>
          <p>
            Evaluamos los hechos del mundo en busca de indicios que puedan tener
            un impacto en el curso de tu trabajo. Trabajamos de la mano con:
          </p>
          <ul>
            <li>Emprendedores de negocios</li>
            <li>Inversionistas de capital</li>
            <li>Empresas medianas</li>
            <li>Corporativos</li>
          </ul>
          <img src="assets/img/layout/faces.jpg" />
        </IntroGrid>
      </Intro>
      <Products setShowSales={setShowSales} setProduct={setProduct} />
      <LastInfoGrid>
        <h2>
          Con la información más <b>relevante</b>
          <br /> para tu <b>negocio</b>
        </h2>
        <p>
          Ofrecemos a nuestros clientes modelos de pensamiento para enfrentar
          nuevas problemáticas haciendo sentido de los hechos del mundo que
          pueden afectar tu negocio. Facilita la toma de decisiones en tu
          organización y genera certidumbre para ti y tu equipo de trabajo.
        </p>
      </LastInfoGrid>
      <HomeItemsDark />
      <Title notoppadding>
        <p>
          Prueba un poco de lo que <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <LastForm>
        <FormComplete
          production={props.production}
          centered
          collectorId="HomeCollector"
          color={theme.colors.home.accent}
        />
      </LastForm>
      <SalesPopup
        showSales={showSales}
        product={product}
        setShowSales={setShowSales}
        color={theme.colors.home.accent}
      />
    </>
  );
}

export default React.memo(Home);

const LastInfoGrid = styled(MainGrid)`
  padding-top: 8%;
  h2 {
    grid-column: 2 / span 10;
    font-size: 4rem;
    max-width: 700px;
    font-weight: 300;
  }
  p {
    grid-column: 2 / span 10;
    max-width: 600px;
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
    }
    p {
      grid-column: 1 / span 12;
      max-width: 500px;
    }
    ul {
      grid-column: 1 / span 12;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 2.7rem;
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
  align-items: flex-start;
  svg {
    max-width: 340px;
    width: 100%;
    grid-column: 1 / span 12;
    justify-self: flex-end;
    padding-top: 5%;
    padding-right: 30px;
  }
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 880px;
      grid-column: 2 / span 8;
      line-height: 120%;
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
      opacity: 0.85;
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
    svg {
      padding-right: 0;
      padding-bottom: 10%;
    }
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  padding-top: 6%;
`;

const IntroGrid = styled(MainGrid)`
  h2 {
    grid-column: 2 / span 10;
    font-size: 4rem;
    max-width: 700px;
    font-weight: 300;
  }
  p {
    grid-column: 2 / span 10;
    max-width: 600px;
  }
  ul {
    grid-column: 2 / span 5;
    grid-row: 3;
    font-size: inherit;
    line-height: inherit;
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
        background-color: ${(props) => props.theme.colors.home.accent};
      }
    }
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
