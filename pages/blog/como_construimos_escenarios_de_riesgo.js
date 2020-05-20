import styled, { withTheme } from "styled-components";
import Head from "components/Head";
import SingleColumn from "components/shared/SingleColumn";
import Author from "components/Blog/Author";
import Title from "components/shared/Title";
import FormComplete from "components/FormComplete";
import MainGrid from "components/shared/MainGrid";

const Header = styled.img`
  max-width: 950px;
  width: 100%;
  margin: 5% auto 0 auto;
  padding: 15px 15px 0 15px;
`;

function BlogPost(props) {
  return (
    <>
      <Head
        title={
          "¿Cómo construímos escenarios de riesgo? | Deep Future Institute"
        }
        canonical={
          "https://deepfuture.institute/blog/como_construimos_escenarios_de_riesgo"
        }
        lang={props.lang}
      />
      <Header
        src="/assets/img/blog/posts/header_escenarios.svg"
        alt="Un análisis del pasado"
      />
      <SingleColumn>
        <h1>
          ¿Cómo construimos <b>escenarios de riesgo?</b>
        </h1>
        <h2>
          Un vistazo a la metodología de nuestro último estudio
          <i> Escenarios de Riesgo En Tiempos De La 4T</i>, una prospectiva del
          país a 10 años
        </h2>
        <Author
          src="/assets/img/blog/authors/dfi.png"
          name="DFI Publicaciones"
          date="20 de Mayo del 2020"
        />
        <p>
          En Deep Future Institute (DFI) somos un equipo de expertos y
          profesionales cuyo trabajo de investigación es el futuro.
          Constantemente, evaluamos hechos del mundo para anticipar riesgos y
          oportunidades ¿pero cómo logramos esto? Tomando como ejemplo nuestro
          último estudio Escenarios de Riesgo en Tiempo de la 4T, el cual es una
          prospectiva del país a diez años (2019-2030), podemos explicarlo.
        </p>
        <h3>
          Nuestra técnica: <b>Geoprospectiva</b>®
        </h3>
        <p>
          La técnica de investigación que empleamos se basa primordialmente en
          la convocatoria de expertos como:
        </p>
        <ul>
          <li> Académicos</li>
          <li> Analistas</li>
          <li> Empresarios</li>
          <li> Políticos</li>
        </ul>
        <p>
          Brindamos a estos expertos un rico marco de información histórica con
          el fin de que, desde su propio conocimiento, identifiquen patrones y
          tendencias de futuro; y que establezcan probabilidades y condiciones
          de ocurrencia que nos ayuden a identificar escenarios futuros desde su
          área de trabajo. Después, con la aplicación de rigurosos modelos
          estadísticos, generamos una visión integrada a partir de las múltiples
          visiones de los expertos.
        </p>
        <h3>
          ¿De dónde venimos? Un análisis del <b>pasado</b>
        </h3>
        <img
          src="/assets/img/blog/posts/pasado.svg"
          alt="Un análisis del pasado"
        />
        <p>
          Para construir escenarios en el futuro revisamos un acervo de
          información que nos permite aprender del pasado y el presente para
          conocer mejor el futuro. La primera fase del estudio consiste en el
          análisis pormenorizado de comportamientos y tendencias de los
          principales indicadores que marcan la vida económica, social,
          ambiental y política de México.
          <br />
          <br />
          Analizamos más de 200 series de tiempo que permiten identificar los
          momentos de volatilidad y periodos de estabilidad que afectan el
          riesgo y la incertidumbre para la toma de decisiones.
          <br />
          <br />
          La información utilizada proviene de la herramienta ALEPH®, que
          contiene el Sistema de Indicadores de Series de Tiempo (SIST) que
          integra información oficial y pública originada en el INEGI, Banxico,
          CONEVAL, Banco Mundial, BID, OMC, Fondo Monetario Internacional, OCDE,
          CEPAL, FAO y OEC, en 200 series debidamente procesadas e integradas
          por DFI.
          <br />
          <br />
          Las tendencias históricas que aporta la evidencia analizada permiten
          identificar los factores que mayor fuerza tienen en la construcción de
          los escenarios de futuro.
          <br />
          <br />
          <b>42 tendencias identificadas</b>
          <br />
          Que definen las certidumbres y alertan sobre los riesgos que enfrenta
          México como sociedad.
        </p>
        <h3>
          ¿Para dónde vamos? Un acercamiento <b>estratégico</b> y
          <b> sistémico</b>
        </h3>
        <img
          src="/assets/img/blog/posts/futuro.svg"
          alt="Un análisis del pasado"
        />
        <p>
          La segunda fase parte de los resultados de la clasificación hecha por
          los expertos con relación a las tendencias históricas y se complementa
          de las siguientes fases:
        </p>
        <ol>
          <li>
            Identificación de variables y modelo que refleja el patrón de
            desarrollo de México.
          </li>
          <li>
            Redacción de 44 tendencias de futuro de las variables identificadas
            como pertinentes y representativas de los principales procesos y
            dinámicas de cambio que afectan las expectativas, certidumbre y
            riesgos del país.
          </li>
          <li>
            Calificación de un conjunto de atributos de cada una de las
            tendencias definidas que permiten recoger las visiones y opiniones
            de los expertos en los siguientes campos:
            <ol>
              <li>Probabilidad</li>
              <li>Deseabilidad</li>
              <li>Conveniencia </li>
              <li>Certidumbre</li>
              <li>Transitoriedad</li>
              <li>Impacto</li>
              <li>Incidencia</li>
              <li>Momento</li>
            </ol>
          </li>
          <li>
            Creación de los escenarios de futuro a partir del análisis de los
            expertos de los resultados integrados estadísticamente.
          </li>
          <li>
            Identificación de la forma como las tendencias se vislumbran en tres
            periodos analíticos: el escenario inmediato, que se circunscribe al
            año 2020, el escenario táctico que va del 2021 al 2024, y el
            escenario estratégico que abarca el periodo del 2025 al 2029.
          </li>
        </ol>
      </SingleColumn>
      <Title notoppadding>
        <p>
          La estrategia de hoy es mucho más que <b>sobrevivir</b>
        </p>
        <h3>
          Encuentra <b>certidumbre</b> con Deep Future Institute
        </h3>
      </Title>
      <LastForm>
        <FormComplete production={props.production} centered collectorId="BlogCollector" />
      </LastForm>
    </>
  );
}

export default withTheme(BlogPost);

const LastForm = styled(MainGrid)`
  padding-bottom: 6%;
  @media (max-width: 950px) {
    padding-bottom: 0;
  }
`;
