import styled from "styled-components";
import IconItem from "./IconItem";
import Expert from "public/assets/img/layout/icons/expert.svg";
import Benefit from "public/assets/img/layout/icons/benefit.svg";
import World from "public/assets/img/layout/icons/world.svg";
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    description: "Instituciones",
    icon: <Expert />,
  },
  {
    description: "Negocios",
    icon: <Benefit />,
  },
  {
    description: "Corporativos",
    icon: <World />,
  },
];

function CovidItemsWhite() {
  return (
    <DataSection>
      <DataWhiteGrid>
        {items.map((item, i) => (
          <IconItem light key={"covidItemWhite" + i} item={item} columned />
        ))}
      </DataWhiteGrid>
    </DataSection>
  );
}

export default CovidItemsWhite;

const DataWhiteGrid = styled.ul`
  display: flex;
  grid-column: 4 / span 6;
  max-width: 1000px;
  justify-content: space-between;
  margin-bottom: 10%;
  svg {
    *:not(.mutant-stroke) {
      stroke: ${(props) => props.theme.colors.escenarios.accent};
    }
  }
  li {
    text-align: center;
    justify-content: center;
    & > div {
      width: 100%;
    }
  }
  @media (max-width: 850px) {
    grid-column: 3 / span 8;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    li {
      & > div {
        justify-content: center;
        align-items: center;
        width: auto;
        margin-right: 0;
      }
      & > div div {
        width: 60px;
        margin: 0 auto 10px auto;
      }
    }
  }
  @media (max-width: 400px) {
    margin-top: 5%;
    p {
      font-size: 1.5rem;
    }
  }
`;

const DataSection = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  padding-top: 6%;
  padding-bottom: 3%;
  p {
    color: ${(props) => props.theme.colors.foreground_lowest};
  }
`;
