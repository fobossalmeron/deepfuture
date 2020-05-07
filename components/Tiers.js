import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";
import { H2, H3 } from "components/shared/Dangerously";
import Check from "public/assets/img/layout/check.svg";
import Uncheck from "public/assets/img/layout/uncheck.svg";

const tiers = [
  {
    title: "autogestivo",
    description:
      "Cómo generar certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b>",
    price: "1,400",
    originalPrice: "2,500",
    perks: { prospectiva: true, worksheets: true, expertos: false, acciones: false, empresarial: false },
  },
  {
    title: "personal",
    description:
      "Genera certidumbre ante el impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
    price: "10,000",
    originalPrice: "25,000",
    color: "#62AF9A",
    perks: { prospectiva: true, worksheets: true, expertos: true, acciones: false, empresarial: false },
  },
  {
    title: "empresarial",
    description:
      "Minimiza los riesgos del impacto del <b>COVID-19</b> y la <b>4T</b> junto con <b>expertos</b>",
    price: "desde $57,000",
    color: "#1C4794",
    perks: { prospectiva: true, worksheets: true, expertos: true, acciones: true, empresarial: true },
  },
];

const Tier = ({ tier }) => {
  return (
    <TierContainer color={tier.color}>
      <Padded>
        <h2>
          Taller <b>{tier.title}</b>
        </h2>
        <H3>{tier.description}</H3>
        <Price>
          <span>${tier.price} <span>MXN</span></span>
          <span>{tier.originalPrice ? "$" + tier.originalPrice: null}</span>
        </Price>
        <Button>Comprar</Button>
      </Padded>
      <Stats>
        <li>18</li>
        {Object.entries(tier.perks).map((perk, i) => (
          <li key={`tp-${i}-${tier.price}`}>
            {perk[1] ? <Check /> : <Uncheck />}
          </li>
        ))}
      </Stats>
    </TierContainer>
  );
};

function Tiers() {
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
      <TiersGrid>
        <Includes>
          <span>Incluye</span>
          <Stats></Stats>
        </Includes>
        {tiers.map((tier, i) => (
          <Tier key={"tier" + i} tier={tier} />
        ))}
      </TiersGrid>
    </TiersSection>
  );
}

export default Tiers;

const Stats = styled.ul`
text-align:center;
`;

const Padded = styled.div`
  padding: 5%;
  ::after {
    content: " ";
    height: 2px;
    opacity: 0.2;
    display: flex;
    padding-top: 5%;
    width: 100%;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size:2.7rem;
  margin:10% 0;
  span {
    span{
      font-size:2rem;
    }
    :nth-of-type(1) {
      color: ${(props) => props.theme.colors.accent};
    }
    :nth-of-type(2) {
      color: ${(props) => props.theme.colors.foreground_low};
      text-decoration: line-through;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
`;

const TierContainer = styled.div`
  grid-column-end: span 3;
  box-shadow: ${(props) =>
    `-4px -6px 11px ${props.theme.colors.lightlight}, 
    4px 4px 12px ${props.theme.colors.lightshadow}`};
  border-radius: 3px;
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
    font-size: 2.7rem;
    color: ${(props) => props.theme.colors.accent};
    font-weight: 300;
    padding-bottom:20px;
    b {
      font-weight: 400;
    }
  }
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.foreground_lowest};
    opacity:0.6;
  }
`;

const Includes = styled.div`
  grid-column-end: span 3;
`;

const TiersGrid = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
`;

const TiersSection = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
`;
