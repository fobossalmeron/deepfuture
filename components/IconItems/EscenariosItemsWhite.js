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
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
  @media (max-width: 1300px) {
    justify-content: space-around;
    li:nth-of-type(3) div:nth-of-type(2) {
      margin-right: 0 !important;
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    li {
      flex-direction: row;
      margin-bottom: 5%;
      & > div:nth-of-type(1) {
        width: 25%;
      }
    }
  }
  @media (max-width: 600px) {
    li {
      flex-direction: column;
      margin-bottom: 5%;
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
