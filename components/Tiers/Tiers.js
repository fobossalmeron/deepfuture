import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";
import { H3 } from "components/shared/Dangerously";
import SingleTier from "./SingleTier";
import Perk from "./Perk";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { useRouter } from "next/router";

const includes = [
  {
    title: "<b>Variables</b> de riesgo",
    id: 1,
    subtitle: "Riesgo, oportunidades y COVID-19",
    perks: ["18", "26", "26 +"],
  },
  {
    title: "Proceso de <b>prospectiva</b>",
    id: 2,
    subtitle: "Aprende a reducir la incertidumbre",
    perks: [true, true, true],
  },
  {
    title: "<b>Worksheets</b> de trabajo",
    id: 3,
    subtitle: "Te brindamos los materiales necesarios",
    perks: [true, true, true],
  },
  {
    title: "Taller con <b>expertos</b>",
    id: 4,
    subtitle: "Con más de 30 años de experiencia",
    perks: [false, true, true],
  },
  {
    title: "Plan de <b>acciones</b> con expertos",
    id: 5,
    subtitle: "Prepárate para los escenarios futuros",
    perks: [false, false, true],
  },
  {
    title: "<b>Personalización</b> para tu empresa",
    id: 6,
    subtitle: "Ten a tu equipo en la misma página",
    perks: [false, false, true],
  },
];

function Tiers({ setShowSales, setShowPay, setProduct, setDiscount }) {
  const theme = useContext(ThemeContext);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("/tallerescovid?autogestivo")) {
      setProduct(tiers[Object.keys(tiers)[0]]);
      setShowPay(true);
    } else if (router.asPath.includes("/tallerescovid?oferta-autogestivo")) {
      setProduct(tiers[Object.keys(tiers)[0]]);
      setShowPay(true);
      setDiscount(true);
    } else if (router.asPath.includes("/tallerescovid?personal")) {
      setProduct(tiers[Object.keys(tiers)[1]]);
      setShowPay(true);
    }
  }, [router]);

  //Tiers are inside so we can access theme from styled-components
  const tiers = [
    {
      title: "autogestivo",
      id: 1,
      subtitle:
        "Cómo generar certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b>",
      description:
        "Prepárate para tiempos de incertidumbre con el impacto del COVID-19 en la 4T de México.Encuentra en este taller:<br/><br/><ul><li>Escenarios que podrían ocurrir a corto y largo plazo ante el COVID-19</li><li>Información de nuestra investigación prospectiva México 2020-2030</li><li>Ejercicios para incorporar esta información a la planeación y estrategia de tu negocio</li></ul>",
      discountedPrice: "$200",
      price: "$700",
      originalPrice: "2,200",
      color: theme.colors.tier1,
    },
    {
      title: "personal",
      id: 2,
      subtitle:
        "Genera certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
      description:
        "Taller virtual con insights de la crisis del COVID-19 durante la Cuarta Transformación en México donde podrás, guiado por expertos, aplicar principios de prospectiva a tu negocio u organización para generar certidumbre y responder estratégicamente.",
      price: "$10000",
      originalPrice: "25000",
      color: theme.colors.tier2,
    },
    {
      title: "empresarial",
      id: 3,
      subtitle:
        "Minimiza los riesgos del impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
      price: "$57000",
    },
  ];

  return (
    <TiersSection>
      <Title>
        <p>
          Prepárate para los escenarios de <b>futuro</b>
        </p>
        <h3>
          Conoce nuestros <b>talleres</b>
        </h3>
      </Title>
      <Scrollable>
        <TiersGrid>
          <TierBackground />
          <TierBackground />
          <TierBackground />
          <PlaceHolder />
          {tiers.map((tier, i) => (
            <SingleTier
              setShowSales={setShowSales}
              setShowPay={setShowPay}
              key={"tier" + i}
              tier={tier}
              setProduct={setProduct}
            />
          ))}
          <StatsGrid>
            <StatsTitle>Incluye</StatsTitle>
            {includes.map((include, i) => (
              <React.Fragment key={"include" + i}>
                <Includes>
                  <H3>{include.title}</H3>
                  <p>{include.subtitle}</p>
                </Includes>
                {include.perks.map((perk, i) => (
                  <Perk key={"tierperks" + i + include.id} perk={perk} />
                ))}
              </React.Fragment>
            ))}
          </StatsGrid>
        </TiersGrid>
      </Scrollable>
    </TiersSection>
  );
}

export default Tiers;

const StatsTitle = styled.span`
  position: absolute;
  left: 0;
  top: -50px;
  font-size: 3rem;
  @media (max-width: 1300px) {
    font-size: 2.3rem;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

const StatsGrid = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1 / span 12;
  z-index: 1;
  grid-gap: 25px;
  display: grid;
  align-items: center;
  padding-bottom: 40px;
  position: relative;
  li {
    list-style: none;
  }
`;

const PlaceHolder = styled.div`
  pointer-events: none;
  grid-column-end: span 3;
  @media (max-width: 950px) {
    display: none;
  }
`;

const Includes = styled.div`
  grid-column-end: span 1;
  position: relative;
  text-align: left;
  list-style: none;
  padding: 10px 0;
  padding-right: 10px;
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.accent};
  }
  p {
    font-size: 1.7rem;
    color: ${(props) => props.theme.colors.foreground_lowest};
    opacity: 0.9;
  }
`;

const TierBackground = styled.div`
  box-shadow: ${(props) =>
    `-4px -6px 11px ${props.theme.colors.lightlight}, 
    4px 4px 12px ${props.theme.colors.lightshadow}`};
  border-radius: 3px;
  grid-column-end: span 3;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  grid-row: 1 / span 2;
  pointer-events: none;
`;

const TiersGrid = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  li {
    flex-direction: row;
    margin-bottom: 5%;
    & > div:nth-of-type(1) {
      width: 25%;
    }
  }
  ${TierBackground} {
    :nth-of-type(1) {
      grid-column-start: 4;
    }
    :nth-of-type(2) {
      grid-column-start: 7;
    }
    :nth-of-type(3) {
      grid-column-start: 10;
    }
  }
  @media (max-width: 1300px) {
    grid-column-gap: 18px;
  }
  @media (max-width: 950px) {
    width: 120%;
    grid-template-columns: repeat(3, 1fr);
    ${TierBackground} {
      grid-column-end: span 1;
      grid-row: 1 / span 1;
      :nth-of-type(1) {
        grid-column-start: 1;
      }
      :nth-of-type(2) {
        grid-column-start: 2;
      }
      :nth-of-type(3) {
        grid-column-start: 3;
      }
    }
    ${StatsGrid} {
      grid-column: 1 / span 3;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0;
    }
    ${Includes} {
      grid-column: 1 / span 3;
      margin-bottom: 5px;
      h3,
      p {
        position: sticky !important;
        left: 5%;
        width: 300px;
        padding-left: 0px;
      }
      &:not(:first-of-type) {
        margin-top: 5px;
      }
    }
  }
  @media (max-width: 600px) {
    width: 220%;
  }
`;

const Scrollable = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 40px;
  @media (max-width: 950px) {
    padding-bottom: 10px;
  }
`;

const TiersSection = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  padding-bottom: 6%;
  overflow-x: hidden;
  @media (max-width: 1100px) {
    padding-bottom: 10%;
  }
`;
