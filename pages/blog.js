import styled from "styled-components";
import Head from "components/Head";
import MainGrid from "components/shared/MainGrid";
import DFIFull from "public/assets/img/layout/logos/dfifull.svg";
import Link from "next/link";
import BackCircle from "public/assets/img/layout/backCircle.svg";
import { H2 } from "components/shared/Dangerously";

function EntryBlock(props) {
  let { href, img, title, author, imgAlt } = props;
  return (
    <Entry>
      <Link href={href} passHref>
        <a>
          <img src={img} alt={imgAlt} />
          <div>
            <H2>{title}</H2>
            <span>{author}</span>
          </div>
        </a>
      </Link>
    </Entry>
  );
}

function Blog(props) {
  return (
    <>
      <Head
        title={"Blog | Deep Future Institute"}
        description={
          "Prepárate para el futuro: Facilita la toma de decisiones y minimiza el riesgo de tu negocio u organización."
        }
        canonical={"https://deepfuture.institute/blog"}
        lang={props.lang}
      />
      <Land id="land">
        <div id="landtext">
          <h1>Blog</h1>
          <EntryGrid>
            <EntryBlock
              href="/blog/el_arma_secreta_de_los_negocios_ganadores_de_la_pandemia"
              img="/assets/img/blog/posts/header_arma.svg"
              imgAlt="El arma secreta"
              title="<b>Método de escenarios</b>: el arma secreta de los negocios ganadores de la pandemia"
              author="Alfonso Arroyo | 04 de Agosto del 2020"
            />
            <EntryBlock
              href="/blog/como_construimos_escenarios_de_riesgo"
              img="/assets/img/blog/posts/header_escenarios.svg"
              imgAlt="Un análisis del pasado"
              title="¿Cómo construimos <b>escenarios de riesgo?</b>"
              author="DFI Publicaciones | 20 de Mayo del 2020"
            />
            <EntryBlock
              href="/blog/cuanto_durara_la_crisis_economica_en_mexico"
              img="/assets/img/blog/posts/header_mexico.svg"
              imgAlt="Cuánto durará la crisis económica?"
              title="¿Cuánto durará la <b>crisis económica</b> en México?"
              author="Alberto Carral | 6 de Julio del 2020"
            />
          </EntryGrid>
        </div>
      </Land>
    </>
  );
}

export default React.memo(Blog);

const EntryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    span {
      padding: 0 5% !important;
    }
  }
`;

const Entry = styled.div`
  border-radius: 4px;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => `-5px -5px 7px rgba(68,99,158,.3), 
    5px 5px 7px ${props.theme.colors.darkshadow}`};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        transform: scale(0.98);
      }
      h4 {
        text-decoration: underline;
      }
    }
  }
  img {
    max-width: 100%;
    width: 100%;
    padding: 5%;
    height: 200px;
    transition: 0.4s ease all;
    margin-top: 10px;
  }
  span {
    padding: 20px 5%;
    color: ${(props) => props.theme.colors.foreground_low};
    display: flex;
  }
  h2 {
    padding: 20px 4% 0 4%;
  }
  a {
    text-decoration: none;
    transition: 0.4s ease all;
  }
`;

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
  @media (max-width: 1100px) {
    h2 {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 950px) {
    padding-top: 15%;
    padding-bottom: 15%;
    h2 {
      grid-column: 1 / span 12;
      font-size: 3rem;
      padding-bottom: 15px;
    }
    p {
      grid-column: 1 / span 12;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 2.7rem;
      padding-bottom: 10px;
    }
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
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    #process {
      li {
        &:nth-of-type(1) {
          grid-column-start: 8;
        }
        &:nth-of-type(2) {
          grid-row: 2;
          grid-column-start: 5;
          grid-column-end: span 6;
        }
        &:nth-of-type(3) {
          grid-row: 3;
          grid-column-start: 2;
        }
        &:nth-of-type(4) {
          grid-row: 4;
          grid-column-start: 5;
        }
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
    #process li {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 900px) {
    #process {
      margin-top: -20px;
      li {
        margin-bottom: 100px;
        padding: 15% 30px;
        grid-column-end: span 10;
        &:nth-of-type(1) {
          grid-column-start: 2;
        }
        &:nth-of-type(2) {
          grid-row: 2;
          grid-column-start: 2;
          grid-column-end: span 11;
        }
        &:nth-of-type(3) {
          grid-row: 3;
          grid-column-start: 2;
        }
        &:nth-of-type(4) {
          grid-row: 4;
          grid-column-start: 2;
        }
      }
    }
  }
  @media (max-width: 600px) {
    #landtext {
      padding-top: 30px;
      padding-bottom: 30px;
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
  @media (max-width: 400px) {
    #process {
      margin-top: 0;
      li {
        padding: 20px;
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
    grid-column: 3 / span 9;
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
  @media (max-width: 1100px) {
    h2 {
      font-size: 3.4rem;
    }
    h3 {
      font-size: 2.6rem;
    }
  }
  @media (max-width: 950px) {
    padding-bottom: 10%;
    p {
      grid-column: 1 / span 12;
    }
    h2 {
      grid-column: 1 / span 12;
      font-size: 3rem;
    }
    h3 {
      font-size: 2.4rem;
    }
    ul {
      grid-column: 2 / span 11;
    }
  }
  @media (max-width: 800px) {
    ul {
      grid-column: 1 / span 12;
    }
  }
  @media (max-width: 600px) {
    grid-gap: 10px;
    h2 {
      font-size: 2.7rem;
      padding-bottom: 10px;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
`;
