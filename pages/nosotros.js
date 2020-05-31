import styled from "styled-components";
import Head from "components/Head";
import MainGrid from "components/shared/MainGrid";
import DFIFull from "public/assets/img/layout/logos/dfifull.svg";
import Link from "next/link";
import BackCircle from "public/assets/img/layout/backCircle.svg";

function About(props) {
  return (
    <>
      <Head
        title={"Nosotros | Deep Future Institute"}
        description={
          "Prepárate para el futuro: Facilita la toma de decisiones y minimiza el riesgo de tu negocio u organización."
        }
        canonical={"https://deepfuture.institute/nosotros"}
        lang={props.lang}
      />
      <Land id="land">
        <div id="landtext">
          <h1>
            Quién es <b>Deep Future Institute</b>
          </h1>
          <h2>
            En Deep Future Institute hacemos planificación prospectiva para
            negocios desde 2005 con el fin de ayudar a líderes a conocer los
            elementos que ponen en riesgo a su negocio. Ayudamos a
            organizaciones a reaccionar y anticiparse a escenarios futuros de
            incertidumbre.
          </h2>
        </div>
        <div id="process">
          <ol>
            <li>
              <BackCircle />
              <span>1.</span>
              <p>
                Realizamos, de la mano con expertos, extensas investigaciones
                que nos dejan ver qué hechos y tendencias afectarán a los
                negocios a mediano y largo plazo
              </p>
            </li>
            <li>
              <BackCircle />
              <span>2.</span>
              <p>
                Condensamos la información en recursos escritos digeribles y
                talleres impartidos por nuestro equipo de expertos
              </p>
            </li>
            <li>
              <BackCircle />
              <span>3.</span>
              <p>
                Brindamos herramientas de estrategia empresarial para afinar la
                planeación del negocio
              </p>
            </li>
            <li>
              <BackCircle />
              <span>4.</span>
              <p>Asesoramos para generar certidumbre en escenarios complejos</p>
            </li>
          </ol>
        </div>
        <DFIFull />
      </Land>
      <Intro>
        <IntroGrid>
          <p>
            <b>Deep Future Institute</b> nace con la idea de brindar información
            confiable y métodos probados a negocios y organizaciones para
            facilitar la toma de decisiones. Con el paso del tiempo, hemos
            condensado enormes cantidades de data para nuestros clientes, además
            de ofrecer soluciones sistémicas para prepararse ante escenarios
            futuros; lo que les permite encontrar claridad en tiempos de
            incertidumbre y reducir riesgos.
          </p>
          <h2>
            Conoce a nuestros <b>directores</b>
          </h2>
          <ul>
            <li>
              <img src="assets/img/layout/alberto.jpg" />
              <div>
                <h3>
                  Alberto <b>Carral</b>
                </h3>
                <p>
                  Economista egresado de la Universidad Nacional Autónoma de
                  México (UNAM), con estudios en los diplomados de Finanzas
                  Corporativas en el ITAM y Análisis Político en la Universidad
                  Iberoamericana, así como en la Maestría en Ciencia Política de
                  la UNAM. Con más de treinta años de experiencia en
                  planificación prospectiva, en particular en las escalas
                  regional y local del desarrollo, y se ha especializado en el
                  diseño de estrategias para gobierno y empresas, así como en el
                  estudio de la economía, política y geopolítica. Ha participado
                  en más de sesenta proyectos de consultoría y en el desarrollo
                  de metodologías y herramientas de software como Espectro y
                  Aleph, para el trabajo con expertos, así como Business
                  Prospect, para evaluación y planificación de pymes y
                  emprendimientos empresariales. Es socio fundador de Deep
                  Future Institute, Scenaries and Strategy, y Centro de
                  Información Geoprospectiva. Ha publicado libros, ensayos y
                  artículos diversos.
                </p>
              </div>
            </li>
            <li>
              <img src="assets/img/layout/alfonso.jpg" />
              <div>
                <h3>
                  Alfonso <b>Arroyo</b>
                </h3>
                <p>
                  Es especialista en prospectiva y doctor en filosofía por la
                  Universidad Autónoma de Barcelona. Actualmente es socio del
                  Centro de Información Geoprospectiva y socio fundador de
                  Scenaries & Strategy y Deep Future Institute. Ha trabajado
                  como consultor en proyectos tanto para el sector público y
                  privado, en México y otros países de Latinoamérica. Ha
                  contribuido al desarrollo teórico de la Geoprospectiva y en el
                  diseño e implementación de herramientas de cómputo
                  prospectivas y probabilísticas. Es también profesor de la
                  Facultad de Filosofía y Letras de la UNAM, donde imparte
                  cursos y hace investigación en los campos de filosofía de la
                  probabilidad y filosofía de la ciencia.
                </p>
              </div>
            </li>
            <li>
              <img src="assets/img/layout/juanjo.jpg" />
              <div>
                <h3>
                  Juan J. <b>de Régules</b>
                </h3>
                <p>
                  Tiene una MBA validada por la OCDE, donde estudió vinculado al
                  Insititute of Business Research. Es ingeniero industrial y
                  tiene estudios formales en las áreas de Análisis Político,
                  Educación, Planeación Regional e Ingeniería de la Conducta.
                  Actualmente trabaja con altos ejecutivos en Estados Unidos y
                  en México, como asesor en behavioral benchmarks y dotándolos
                  de modelos e información para mejorar la toma de decisiones.
                  Es socio fundador del Deep Future Institute.
                </p>
              </div>
            </li>
            <li>
              <img src="assets/img/layout/rafael.jpg" />
              <div>
                <h3>
                  Rafael <b>Echeverri</b>
                </h3>
                <p>
                  Es de nacionalidad colombiana, politólogo y especialista en
                  desarrollo sostenible y territorio. Ha desempeñado cargos en
                  el sector público y académico, tales como Secretario Técnico
                  del Programa Iberoamericano de Cooperación en Gestión
                  Territorial, Viceministro de Agricultura, Secretario General
                  del Ministerio de Medio Ambiente, Director Técnico del
                  Departamento de Estadística de Colombia y profesor
                  investigador, director del Área de Población y Desarrollo de
                  la Universidad de los Andes de Colombia. Ha asesorado en temas
                  de planeación, prospectiva y políticas públicas a los
                  gobiernos de México, Colombia, Brasil, Argentina y otros
                  países de América Latina, actuando como consultor
                  internacional para diversos organismos multilaterales como el
                  IICA, PNUMA, FAO, FIDA, CEPAL, PNUD, Banco Mundial, CAF, BID,
                  GIZ y AECID. Es autor de múltiples libros y artículos
                  especializados, así como conferencista en múltiples foros y
                  conferencias.
                </p>
              </div>
            </li>
          </ul>
        </IntroGrid>
      </Intro>
      <LastInfoGrid>
        <h2>
          ¿Cómo puedes <b>comunicarte</b> con nosotros?
        </h2>
        <p>
          Visita nuestra página de{" "}
          <Link href="/contacto" passHref>
            <a>contacto</a>
          </Link>
        </p>
      </LastInfoGrid>
    </>
  );
}

export default React.memo(About);

const LastInfoGrid = styled(MainGrid)`
  padding-top: 6%;
  padding-bottom: 6%;
  h2 {
    grid-column: 2 / span 10;
    font-size: 4rem;
    max-width: 700px;
    font-weight: 300;
  }
  p {
    grid-column: 2 / span 10;
    max-width: 600px;
    opacity: 1;
    color: ${(props) => props.theme.colors.foreground_low};
  }
  a {
    color: ${(props) => props.theme.colors.foreground};
    font-weight: 500;
  }
`;

const Land = styled(MainGrid)`
  min-height: 100vh;
  padding-bottom: 6%;
  align-items: center;
  padding-top: 8%;
  align-items: flex-start;
  svg {
    max-width: 320px;
    width: 100%;
    grid-column: 1 / span 12;
    justify-self: flex-end;
    padding-top: 5%;
  }
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 880px;
      grid-column: 2 / span 8;
      line-height: 120%;
      b {
        font-weight: 500;
      }
    }
    h2 {
      font-size: 2.55rem;
      line-height: 135%;
      max-width: 650px;
      margin-top: 0;
      font-weight: 300;
      opacity: 0.85;
    }
  }
  #process {
    grid-column: 1 / span 12;
    margin-top: -15%;
    margin-bottom: -3%;
    ol {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 0;
    }
    li {
      grid-column-end: span 5;
      border-radius: 8px;
      text-align: center;
      padding: 9%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      max-width: 380px;
      width: auto;
      position: relative;
      svg {
        width: 140%;
        height: 140%;
        position: absolute;
        z-index: 0;
        max-width: unset;
        padding: 0;
        top: -15%;
        bottom: -20%;
        left: -20%;
      }
      &:nth-of-type(1) {
        grid-column-start: 9;
      }
      &:nth-of-type(2) {
        grid-row: 2;
        grid-column-start: 6;
        grid-column-end: span 6;
      }
      &:nth-of-type(3) {
        grid-row: 3;
        grid-column-start: 3;
      }
      &:nth-of-type(4) {
        grid-row: 4;
        grid-column-start: 6;
      }
      p {
        max-width: 400px;
        padding-top: 15px;
      }
      span {
        color: ${(props) => props.theme.colors.home.accent};
        font-size: 4rem;
        font-weight: 400;
        display: block;
        z-index: 1;
      }
    }
  }
  @media (max-width: 1100px) {
    #landtext {
      h1 {
        font-size: 4rem;
        max-width: 760px;
      }
      h2 {
        font-size: 2.1rem;
        max-width: 530px;
      }
    }
  }
  @media (max-width: 950px) {
    #landtext {
      grid-column: 1 / span 12;
      h1 {
        font-size: 3.5rem;
        max-width: 660px;
      }
      h2 {
        font-size: 2rem;
        max-width: 530px;
      }
    }
  }
  @media (max-width: 600px) {
    #landtext {
      padding-top: 100px;
      h1 {
        font-size: 3rem;
        max-width: 660px;
      }
      h2 {
        font-size: 1.8rem;
        max-width: 530px;
      }
    }
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  padding-top: 6%;
  padding-bottom: 6%;
`;

const IntroGrid = styled(MainGrid)`
  h2 {
    grid-column: 2 / span 10;
    font-size: 4rem;
    max-width: 700px;
    font-weight: 300;
    padding-bottom: 20px;
    padding-top: 6%;
  }
  h3 {
    font-size: 2.8rem;
    padding-bottom: 10px;
  }
  p {
    grid-column: 2 / span 10;
    max-width: 600px;
  }
  ul {
    grid-column: 3 / span 5;
    grid-row: 3;
    font-size: inherit;
    line-height: inherit;
    li {
      display: flex;
      margin-bottom: 5px;
      padding-bottom: 8%;
      & > div {
        padding-left: 20px;
      }
    }
  }
  img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
  }
`;
