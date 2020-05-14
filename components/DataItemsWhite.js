import styled from "styled-components";
import DataItem from "components/shared/DataItem";
import Time from "public/assets/img/layout/icons/time.svg";
import Team from "public/assets/img/layout/icons/team.svg";
import Info from "public/assets/img/layout/icons/info.svg";
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    title: "Prepárate<br/> para el futuro",
    description:
      "Analizar los escenarios que podrían ocurrir a corto y largo plazo te ayudará a organizar la información que necesitas para enfrentar nuevas problemáticas y reducir riesgos.",
    icon: <Time />,
  },
  {
    title: "Con la mejor<br/>información",
    description:
      "Encuentra claridad y certidumbre en estos tiempos de crisis humanitarias y financieras. Nuestro trabajo de investigación es el futuro y hacemos una constante evaluación de hechos del mundo para anticipar los riesgos y oportunidades.",
    icon: <Info />,
  },
  {
    title: "Y el equipo<br/>mejor preparado",
    description:
      "Nuestro equipo de expertos, prospectistas, investigadores, académicos y analistas tienen más de 12 años de experiencia ampliando y completando la percepción de la gravedad de la incertidumbre.",
    icon: <Team />,
  },
];

function DataItemsWhite() {
  return (
    <DataSection>
      {items.map((item, i) => (
        <DataItem light key={"dataItemWhite" + i} item={item} columns={3} />
      ))}
    </DataSection>
  );
}

export default DataItemsWhite;

const DataSection = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  p{
    color: ${(props) => props.theme.colors.foreground_lowest};

  }
`;
