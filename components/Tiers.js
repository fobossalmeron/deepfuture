import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";

const items = [
  {
    title: "Prepárate<br/> para el futuro",
    description:
      "Analizar los escenarios que podrían ocurrir a corto y largo plazo te ayudará a organizar la información que necesitas para enfrentar nuevas problemáticas y reducir riesgos.",
  },
  {
    title: "Con la mejor<br/>información",
    description:
      "Encuentra claridad y certidumbre en estos tiempos de crisis humanitarias y financieras. Nuestro trabajo de investigación es el futuro y hacemos una constante evaluación de hechos del mundo para anticipar los riesgos y oportunidades.",
  },
  {
    title: "Y el equipo<br/>mejor preparado",
    description:
      "Nuestro equipo de expertos, prospectistas, investigadores, académicos y analistas tienen más de 12 años de experiencia ampliando y completando la percepción de la gravedad de la incertidumbre.",
  },
];

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
      </TiersGrid>
    </TiersSection>
  );
}

export default Tiers;

const TiersGrid = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
`;

const TiersSection = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
`;
