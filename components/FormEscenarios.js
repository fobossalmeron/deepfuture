import styled from "styled-components";
import StudyCollector from "components/shared/StudyCollector";

function FormEscenarios({ second, collectorId, production, color }) {
  return (
    <Form color={color}>
      <Column>
        <h4>Descarga el resumen</h4>
        {!second ? (
          <p>
            El estudio consistió en el análisis de la trayectoria y la velocidad
            de más de doscientas variables relevantes para el país. Junto a un
            grupo de expertos –académicos, analistas, empresarios y políticos–
            se construyeron los escenarios de riesgo que afectarán al país en
            los años venideros.
          </p>
        ) : (
          <p>
            Todos los datos que generamos son recopilados por rigurosos procesos
            de investigación. Si quieres conocer nuestra metodología, visita
            esta página, o mejor aún, descarga este resumen de la investigación.
          </p>
        )}
      </Column>
      <Column>
        <StudyCollector
          production={production}
          complete
          collectorId={collectorId}
        />
      </Column>
    </Form>
  );
}

export default FormEscenarios;

const Form = styled.div`
  background-color: ${(props) => props.theme.colors.escenarios.accent};
  grid-column: 3 / span 8;
  border-radius: 5px;
  padding: 5% 6.5%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease-in;
  pointer-events: auto;
  @media (max-width: 1200px) {
    grid-column: 2 / span 9;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 950px) {
    grid-column: 1 / span 12;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    & > div {
      max-width: 100%;
      p {
        margin-bottom: 20px;
      }
    }
  }
`;

const Column = styled.div`
  max-width: 330px;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  &:nth-of-type(1) {
    padding-right: 5%;
    max-width: 370px;
  }
  h4 {
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 23px;
    b {
      font-weight: 400;
    }
  }
  p {
    opacity: 1 !important;
    b {
      font-weight: 500;
    }
  }
  @media (max-width: 950px) {
    h4 {
      font-size: 2.7rem;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 2.5rem;
      margin: 10px 0 15px 0;
    }
  }
`;
