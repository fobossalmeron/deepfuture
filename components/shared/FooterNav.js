import styled from "styled-components";
import Imago from "public/assets/img/layout/logos/dfiimago.svg";
import Link from "next/link";

const Footer = () => (
  <FooterContainer>
    <FooterNavigation>
      <div>
        <Link href="/" passHref>
          <a>Talleres COVID + 4T</a>
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
  background-color: #353739;
  margin-top: 25px;
`;

const FooterNavigation = styled.div`
  padding-top: 5%;
  padding-bottom: 13px;
  display: flex;
  width: 100%;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    line-height: 180%;
    font-weight: 300;
    a {
      text-decoration: none;
      /* &:after {
        width: 100%;
        height: 2px;
        background-color: transparent;
        display: block;
        content: " ";
      } */
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
      text-decoration-color: ${(props) => props.theme.colors.accent};
      text-underline-offset: 3px;
      text-decoration-thickness: 0.2rem;
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