import styled from "styled-components";
import Imago from "public/assets/img/layout/logos/dfiimago.svg";
import Link from "next/link";

const Footer = () => (
  <FooterContainer>
    <FooterNavigation>
      <div>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/tallerescovid" passHref>
          <a>Talleres COVID + 4T</a>
        </Link>
        <Link href="/escenariosderiesgo" passHref>
          <a>Escenarios de Riesgo</a>
        </Link>
        <Link href="/nosotros" passHref>
          <a>Nosotros</a>
        </Link>
        <Link href="/blog" passHref>
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href="/privacidad" passHref>
          <a>Política de Privacidad</a>
        </Link>
        <Link href="/cookies" passHref>
          <a>Política de Cookies</a>
        </Link>
        <Link href="/terminos" passHref>
          <a>Términos y Condiciones</a>
        </Link>
      </div>
    </FooterNavigation>
    <FooterBottom>
      © Deep Future Institute, 2020
      <Imago />
    </FooterBottom>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #2b2b2b;
  margin-top: 25px;
  z-index: 1;
`;

const FooterNavigation = styled.div`
  padding-top: 50px;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    line-height: 180%;
    font-weight: 300;
    a {
      text-decoration: none;
    }
    &:nth-of-type(1) {
      text-align: right;
      padding-right: 5%;
      font-weight: 400;
      &::after {
        content: " ";
        width: 2px;
        border-radius: 2px;
        height: 100%;
        display: block;
        background-color: ${(props) => props.theme.colors.foreground_low};
        opacity: 0.4;
        position: absolute;
        right: 0;
      }
    }
    &:nth-of-type(2) {
      padding-left: 5%;
      font-size: 1.7rem;
      color: ${(props) => props.theme.colors.foreground_low};
    }
  }
  @media (hover: hover) and (pointer: fine) {
    a:hover {
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.colors.home.accent};
      text-underline-offset: 3px;
      text-decoration-thickness: 0.2rem;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 6%;
    div {
      &:nth-of-type(1) {
        text-align: left;
        padding-right: 5%;
        margin-bottom: 10px;
        &::after {
          width: 100%;
          height: 2px;
          bottom: 0px;
          margin-top: 10px;
          position: relative;
        }
      }
      &:nth-of-type(2) {
        padding-left: 0;
      }
      text-align: left;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.foreground_low};
  font-size: 1.5rem;
  padding-bottom: 40px;
  align-items: center;
  svg {
    width: 35px;
    z-index: 0;
  }
  @media (max-width: 1600px) {
    padding: 20px 6% 40px 6%;
  }
`;
