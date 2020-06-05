import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import IconItem from "./IconItem";
import Eye from "public/assets/img/layout/icons/eye.svg";
import Benefit from "public/assets/img/layout/icons/benefit.svg";
import Expert from "public/assets/img/layout/icons/expert.svg";
import Aleph from "public/assets/img/layout/icons/aleph.svg";
import Team from "public/assets/img/layout/icons/team.svg";
import World from "public/assets/img/layout/icons/world.svg";
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    description:
      "El equipo de Deep Future Institute tiene +30 años haciendo prospectiva en México y el mundo",
    icon: <Expert />,
  },
  {
    description:
      "+200 variables relevantes del país fueron analizadas durante este trabajo",
    icon: <Benefit />,
  },
  {
    description:
      "+30 expertos fueron consultados para la realización de la investigación",
    icon: <Team />,
  },
  {
    description:
      "Información de +11 organismos públicos (INEGI, Banxico, Coneval y más)",
    icon: <Eye />,
  },
  {
    description:
      "+100 negocios han acudido a nuestro equipo de expertos para mejorar sus organizaciones",
    icon: <World />,
  },
  {
    description: "Tecnología de investigación: ALEPH® y ESPECTRO®",
    icon: <Aleph />,
  },
];

function HomeItemsDark() {
  const theme = useContext(ThemeContext);
  return (
    <DataSection>
      <DataDarkGrid>
        {items.map((item, i) => (
          <IconItem
            dark
            key={"homeItemWhite" + i}
            item={item}
            columned
            shadowColor={theme.colors.escenarios.accent}
          />
        ))}
      </DataDarkGrid>
    </DataSection>
  );
}

export default HomeItemsDark;

const DataDarkGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-column: 2 / span 11;
  justify-content: space-between;
  align-items: baseline;
  li {
    width: 33%;
    max-width: 460px;
    margin-bottom: 6%;
    div p {
      padding-right: 10px;
    }
    p {
      width: 100%;
      max-width: unset;
    }
  }
  svg {
    *:not(.mutant-stroke) {
      stroke: ${(props) => props.theme.colors.escenarios.accent};
    }
  }
  @media (max-width: 1300px) {
    li:nth-of-type(3) div:nth-of-type(2) {
      margin-right: 0 !important;
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    grid-column: 1 / span 12;
    li {
      width: 50%;
      flex-direction: row;
      margin-bottom: 5%;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    grid-column: 1 / span 12;

    li {
      flex-direction: column;
      margin-bottom: 5%;
      width: 100%;
      div {
        p {
          max-width: 300px;
        }
        div {
          /* margin-bottom: 0; */
        }
      }
    }
  }
`;

const DataSection = styled(MainGrid)`
  padding-top: 6%;
  padding-bottom: 6%;
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 600px) {
    padding-bottom: 13%;
    padding-top: 35px;
  }
`;
