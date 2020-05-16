import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";
import { P, H3 } from "components/shared/Dangerously";
import { darken, lighten } from "polished";
import Check from "public/assets/img/layout/check.svg";
import Uncheck from "public/assets/img/layout/uncheck.svg";
import Fade from "react-reveal/Fade";
import currency from "currency.js";

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
    subtitle: "Con más de 20 años de experiencia",
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

const tiers = [
  {
    title: "autogestivo",
    id: 1,
    subtitle:
      "Cómo generar certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b>",
    description:
      "Taller descargable con insights de la crisis del COVID-19 y la Cuarta Transformación donde podrás aplicar principios de prospectiva a tu negocio u organización para generar certidumbre y responder estratégicamente.",
    price: "$1400",
    originalPrice: "2,500",
    insights: "18",
    color: "#62AF9A",
    perks: {
      prospectiva: true,
      worksheets: true,
      expertos: false,
      acciones: false,
      empresarial: false,
    },
  },
  {
    title: "personal",
    id: 2,
    subtitle:
      "Genera certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
    description:
      "Taller virtual con insights de la crisis del COVID-19 y la Cuarta Transformación donde podrás, guiado por expertos, aplicar principios de prospectiva a tu negocio u organización para generar certidumbre y responder estratégicamente.",
    price: "$10000",
    originalPrice: "25000",
    color: "#1C4794",
    insights: "26",
    perks: {
      prospectiva: true,
      worksheets: true,
      expertos: true,
      acciones: false,
      empresarial: false,
    },
  },
  {
    title: "empresarial",
    id: 3,
    subtitle:
      "Minimiza los riesgos del impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
    price: "$57000",
    insights: "26 +",
    perks: {
      prospectiva: true,
      worksheets: true,
      expertos: true,
      acciones: true,
      empresarial: true,
    },
  },
];

const Perk = ({ perk }) => (
  <Stat>
    {typeof perk == "string" && perk}
    {perk === true && <Check />}
    {perk === false && <Uncheck />}
  </Stat>
);

const Tier = ({ tier, setShowPopup, setShowPay, setProduct }) => {
  const buyOption = () => (setProduct(tier), setShowPay(true));
  return (
    <TierContainer color={tier.color}>
      <div>
        <Fade>
          <h2>
            <span>Taller</span> <b>{tier.title}</b>
          </h2>
          <H3>{tier.subtitle}</H3>
        </Fade>
        <Fade>
          <Price>
            <span>
              {tier.title === "empresarial" && <PreSpan>desde </PreSpan>}
              {currency(tier.price, {
                precision: 0,
                symbol: "$",
                formatWithSymbol: true,
              }).format()}
              <span>MXN</span>
            </span>
            <span>
              {tier.originalPrice
                ? currency(tier.originalPrice, {
                    precision: 0,
                    symbol: "$",
                    formatWithSymbol: true,
                  }).format()
                : null}
            </span>
          </Price>
          {tier.title !== "empresarial" ? (
            <Button onClick={buyOption}>Ver más</Button>
          ) : (
            <Button onClick={setShowPopup}>Contacta a un asesor</Button>
          )}
        </Fade>
      </div>
    </TierContainer>
  );
};

function Tiers({ setShowPopup, setShowPay, setProduct }) {
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
            <Tier
              setShowPopup={setShowPopup}
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

const Stat = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
`;

const PlaceHolder = styled.div`
  pointer-events: none;
  grid-column-end: span 3;
  @media (max-width: 950px) {
    display: none;
  }
`;

const Includes = styled.li`
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
    color: ${(props) => props.theme.colors.foreground_low};
  }
  /* @media (max-width: 950px) {
    h3,
    p {
      position: sticky !important;
      left: 10px;
      width: 300px;
    }
  } */
`;

const PreSpan = styled.div`
  font-size: 2rem;
  display: inline-flex;
  margin-right: 5px;
  @media (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.7rem;
  margin: 10% 0;
  align-items: flex-end;
  line-height: 100%;
  span {
    span {
      font-size: 2rem;
    }
    :nth-of-type(1) {
      color: ${(props) => props.theme.colors.accent};
    }
    :nth-of-type(2) {
      color: ${(props) => props.theme.colors.foreground_low};
      text-decoration: line-through;
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1300px) {
    font-size: 2.5rem;
    span {
      span {
        font-size: 1.5rem;
      }
      :nth-of-type(2) {
        font-size: 1.3rem;
      }
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding-right: 6px;
  padding-left: 6px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.disabled
          ? darken(0.1, props.theme.colors.accent)
          : props.theme.colors.foreground_low};
    }
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

const TierContainer = styled.div`
  grid-column-end: span 3;
  & > div {
    padding: 8%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 80px);
    div:nth-of-type(3) {
      ::after {
        content: " ";
        height: 2px;
        display: flex;
        margin-top: 40px;
        width: 100%;
        opacity: 0.8;
        background-color: ${(props) => props.theme.colors.foreground_lower};
      }
    }
  }
  ::before {
    content: " ";
    display: flex;
    border-radius: 3px 3px 0px 0px;
    height: 80px;
    width: 100%;
    background-color: ${(props) =>
      props.color ? props.color : props.theme.colors.background};
  }
  h2 {
    font-size: 2.6rem;
    color: ${(props) => props.theme.colors.accent};
    font-weight: 400;
    padding-bottom: 20px;
    b {
      font-weight: 500;
    }
  }
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.foreground_lowest};
    opacity: 0.6;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2.3rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 950px) {
    grid-column-end: span 1;
    grid-row: 1;
    h2 {
      font-size: 2.2rem;
      margin-top: 15px;
    }

    h3 {
      font-size: 1.7rem;
    }
    & > div {
      height: calc(100% - 60px);
      padding: 6%;
      div:nth-of-type(3) {
        ::after {
          display: none;
        }
      }
    }
    &::before {
      height: 60px;
      /* border-radius: 0; */
    }
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
    ${Stat} {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      &::before {
        width: 15px;
        content: " ";
        height: 15px;
        position: relative;
        display: block;
        border-radius: 50%;
        align-self: center;
        margin-right: 20px;
      }
      &:nth-of-type(3n - 1) {
        &:before {
          background-color: #1c4794;
        }
        border: 2px solid ${(props) => props.theme.colors.foreground_lower};
        border-top: 0;
        border-bottom: 0;
      }
      &:nth-of-type(3n - 2) {
        &:before {
          background-color: #62af9a;
        }
      }
      &:nth-of-type(3n - 3) {
        &:before {
          background-color: ${(props) => props.theme.colors.background};
        }
      }
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
  padding-bottom:40px;
  @media(max-width:950px){
    padding-bottom:10px;
  }
`;

const TiersSection = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  padding-bottom: 10%;
  overflow-x: hidden;
`;
