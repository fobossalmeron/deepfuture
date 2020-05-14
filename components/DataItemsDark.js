import styled from "styled-components";
import DataItem from "components/shared/DataItem";
import Time from "public/assets/img/layout/icons/time.svg";
import World from "public/assets/img/layout/icons/world.svg"
import Risk from "public/assets/img/layout/icons/risk.svg";
import Benefit from "public/assets/img/layout/icons/benefit.svg"
import Expert from "public/assets/img/layout/icons/expert.svg"
import Home from "public/assets/img/layout/icons/home.svg"
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    title: "Organiza la información<br/> y úsala para tu beneficio",
    description:
      "Brindamos datos recopilados de +11 organismos públicos (INEGI, Banxico, Coneval y más) para analizar +200 variables relevantes del país.",
    icon: <Benefit />,
  },
  {
    title: "Hazlo desde casa, <br/>en este momento",
    description:
      "Comienza ya con nuestro taller digital, una modalidad de nuestro servicio que puedes ejecutar para tu negocio en este mismo momento.",
    icon: <Home />,
  },
  {
    title: "Anticipa riesgos <br/>y oportunidades",
    description:
      "Interpreta los hechos del mundo y el país para hacer sentido sobre cómo afectan a tu organización y/o institución.",
    icon: <Risk />,
  },
  {
    title: "Con expertos con más de una década de experiencia",
    description:
      "Nuestras investigaciones son sustentadas por rospectivistas, investigadores, ácadémicos y analistas con más de 12 años de experiencia.",
    icon: <Expert />,
  },
  {
    title: "Para dimensionar los problemas del mundo",
    description:
      "Un error común es no dimensionar los escenarios de riesgo. Tener un acercamiento estratégico y sistémico hacia el futuro te ayudará a alcanzar tus metas de negocio.",
    icon: <World />,
  },
];

function DataItemsWhite() {
  return (
    <>
      <DataSection>
        <div />
        <div />
        {items.map(
          (item, i) =>
            i < 3 && (
              <DataItem
                dark
                key={"dataItemWhite" + i}
                item={item}
                columns={3}
              />
            )
        )}
      </DataSection>
      <DataSection notoppadding>
        <div /> <div />
        <div />
        {items.map(
          (item, i) =>
            i > 2 && (
              <DataItem
                dark
                key={"dataItemWhite" + i}
                item={item}
                columns={3}
              />
            )
        )}
      </DataSection>
    </>
  );
}

export default DataItemsWhite;

const DataSection = styled(MainGrid)`
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
`;
