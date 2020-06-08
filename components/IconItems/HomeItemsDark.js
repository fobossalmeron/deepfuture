import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import IconItem from "./IconItem";
import Eye from "public/assets/img/layout/icons/eye.svg";
import Benefit from "public/assets/img/layout/icons/benefit.svg";
import Expert from "public/assets/img/layout/icons/expert.svg";
import Aleph from "public/assets/img/layout/icons/aleph.svg";
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    description:
      "Utilizamos herramientas tecnológicas y de matemática estadística",
    icon: <Aleph />,
  },
  {
    description:
      "Consultamos expertos: Académicos, Analistas, Empresarios y Políticos",
    icon: <Expert />,
  },
  {
    description:
      "Recolectamos y condensamos información de organismos públicos",
    icon: <Benefit />,
  },
  {
    description: "Generamos y analizamos cientos de posibles series de tiempo",
    icon: <Eye />,
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
            shadowColor={theme.colors.home.accent}
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
  max-width: 1000px;
  justify-content: space-between;
  align-items: baseline;
  li {
    width: 50%;
    max-width: 460px;
    margin-bottom:18px;
    align-items:center;
    div{
      margin-bottom:0;
    }
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
      stroke: ${(props) => props.theme.colors.home.accent};
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
      align-items: flex-start;
      div {
        margin-bottom:10px;
        p {
          max-width: 300px;
        }
        div {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const DataSection = styled(MainGrid)`
  padding-top: 6%;
  padding-bottom: 10%;
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
