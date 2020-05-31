import styled from "styled-components";
import { darken } from "polished";
import Link from "next/link";

function LinkToCovid() {
  return (
    <Form>
      <Column>
        <h4>
          Crisis <b>COVID-19</b> en tiempos de la <b>4T</b>
        </h4>
        <p>
          Tenemos talleres autogestivos y con expertos para preparar a tu
          organización ante los riesgos de la crísis económica provocada por el
          COVID.
        </p>
        <Link href="/tallerescovid" passHref>
          <StyledButton>Visita los talleres</StyledButton>
        </Link>
      </Column>
    </Form>
  );
}

export default LinkToCovid;

const StyledButton = styled.a`
  max-width: 230px;
  text-decoration: none;
  padding: 14px;
  margin: 4px 0;
  font-weight: 400;
  display: block;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.cta};
  color: ${(props) => props.theme.colors.background};
  border: 0;
  font-size: 1.7rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => darken(0.2, props.theme.colors.cta)};
    }
  }
  @media (max-width: 750px) {
    padding: 11px 2%;
  }
`;

const Form = styled.div`
  background-color: ${(props) => props.theme.colors.home.accent};
  grid-column: 4 / span 6;
  border-radius: 5px;
  padding: 5% 6.5%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease-in;
  pointer-events: auto;
  @media (max-width: 1200px) {
    grid-column: 3 / span 7;
  }
  @media (max-width: 1050px) {
    grid-column: 3 / span 8;
  }
  @media (max-width: 950px) {
    grid-column: 1 / span 12;
    margin-bottom: 20px;
    max-width: 440px;
    padding: 30px;
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
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  padding-right: 5%;
  h4 {
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 23px;
    b {
      font-weight: 400;
    }
  }
  p {
    max-width: 520px;
    margin-bottom: 25px;
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
