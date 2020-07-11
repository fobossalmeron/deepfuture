import styled from "styled-components";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { darken, lighten, readableColor } from "polished";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import ClientOnlyPortal from "components/ClientOnlyPortal";
import { H3 } from "components/shared/Dangerously";
import Link from "next/link";
import MercadoPago from "components/MercadoPago";
import MercadoLogo from "public/assets/img/layout/logos/mercadopago.svg";
import currency from "currency.js";
import Forms from "public/assets/img/layout/icons/forms.svg";
import Sheets from "public/assets/img/layout/icons/sheets.svg";
import Meet from "public/assets/img/layout/icons/meet.svg";
import Pdf from "public/assets/img/layout/icons/pdf.svg";
import CircleIcon from "components/shared/CircleIcon";
import Footer from "components/shared/Footer";

const PayPopup = ({ setShowPay, showPay, product }) => {
  useEffect(() => {
    showPay && popupShow();
    !showPay && unlockScreen();
  }, [showPay]);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#PayPopup"); //dummy
    disableBodyScroll(targetElement);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#PayPopup"); //dummy
    enableBodyScroll(targetElement);
    setShowPay(false);
  };

  return (
    <ClientOnlyPortal selector="#modal">
      <Wrapper clickable={showPay} id="PayPopup">
        <CrossContainerMobile>
          <Cross onClick={unlockScreen} />
        </CrossContainerMobile>
        <Left>
          <h2>
            Taller <b>{product ? product.title : null}</b>
          </h2>
          <H3>{product ? product.subtitle : null}</H3>
          <p>{product ? product.description : null}</p>
          <span>
            {currency(product ? product.price : 0, {
              symbol: "$",
              formatWithSymbol: true,
            }).format()}{" "}
            <span>MXN</span>
          </span>
          <Icons>
            <Icon dark>
              <Sheets />
            </Icon>
            {product && product.id === 1 && (
              <Icon dark>
                <Pdf />
              </Icon>
            )}
            {product && product.id === 2 && (
              <>
                <Icon dark>
                  <Forms />
                </Icon>
                <Icon dark>
                  <Meet />
                </Icon>
              </>
            )}
          </Icons>
        </Left>
        <Right color={product ? product.color : "red"}>
          <Panel color={product ? product.color : "red"}>
            <Warning>
              <span>
                *Confirma que tu correo sea correcto ya que ahí recibirás el
                taller una vez realizada tu compra.
              </span>
            </Warning>
            <MercadoPago product={product ? product : null} />
          </Panel>
          <SmallPrint>
            <Transacciones>
              <span>Transacciones seguras con</span>
              <MercadoLogo />
            </Transacciones>
            <p>
              Aceptamos todas las tarjetas y pagos en tiendas de autoservicio.
              Consulta nuestros{" "}
              <Link href="/terminos" passHref>
                <a>Términos y Condiciones</a>
              </Link>
              .
            </p>
          </SmallPrint>
          <FooterStyledMobile>
            <Footer />
          </FooterStyledMobile>
        </Right>
      </Wrapper>
      <Background visible={showPay}>
        <CrossContainer>
          <Cross onClick={unlockScreen} />
        </CrossContainer>
        <TierBackground color={product ? product.color : "red"} />
        <FooterStyled>
          <Footer />
        </FooterStyled>
      </Background>
    </ClientOnlyPortal>
  );
};

export default PayPopup;

const FooterStyledMobile = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
    footer {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 950px) {
    display: none;
  }
`;

const Warning = styled.div`
  margin-bottom: 15px;
  span {
    font-size: 1.7rem;
    line-height: 100%;
  }
`;

const SmallPrint = styled.div`
  padding: 0 8%;
  color: ${(props) => props.theme.colors.foreground};
  padding-bottom: 20px;
  @media (max-width: 370px) {
    padding: 0 0 20px 0;
  }
`;

const Transacciones = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8%;
  margin-bottom: 10px;
  svg {
    max-width: 35px;
    margin-left: 10px;
  }
  span {
    font-size: 2.1rem;
  }
`;

const Right = styled.div`
  pointer-events: inherit;
  max-width: 450px;
  color: ${(props) =>
    readableColor(
      props.color,
      props.theme.colors.foreground.toString(),
      props.theme.colors.background.toString(),
      true
    )};
  h4 {
    font-size: 2rem;
  }
  h5 {
    margin: 10px 0 5px 0;
  }
  p {
    font-size: 1.4rem;
    opacity: 0.77;
  }
  @media (max-width: 1250px) {
    max-width: 350px;
    ${Transacciones} span {
      font-size: 1.8rem;
    }
  }
`;

const Panel = styled.div`
  pointer-events: inherit;
  padding: 8%;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  position: relative;
  box-shadow: ${(props) =>
    `-5px -5px 15px ${lighten(0.05, `${props.color}`)},
    4px 3px 11px ${darken(0.05, `${props.color}`)}`};
  @media (max-width: 950px) {
    box-shadow: none;
  }
`;

const Left = styled.div`
  pointer-events: inherit;
  max-width: 430px;
  font-weight: 400;
  h2 {
    font-weight: 300;
    b {
      font-weight: 400;
    }
  }
  h3 {
    padding-top: 10px;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 130%;
    color: ${(props) => props.theme.colors.foreground_low};
    &::after {
      content: " ";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.colors.foreground};
      opacity: 0.25;
      margin: 20px 0 35px;
    }
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
  span {
    font-size: 2.6rem;
    margin-top: 15px;
    display: block;
    span {
      font-size: 2rem;
      display: inline-block;
      font-weight: 300;
    }
  }
  @media (max-width: 1250px) {
    max-width: 350px;
    padding-top: 5%;
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 950px) {
    h3::after {
      margin: 15px 0 20px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  margin-top: 10%;
  @media (max-width: 950px) {
    margin-top: 15px;
  }
`;

const Icon = styled(CircleIcon)`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  svg {
    padding: 24%;
  }
  @media (max-width: 950px) {
    width: 50px;
    height: 50px;
  }
`;

const CrossContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  svg {
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

const CrossContainerMobile = styled(CrossContainer)`
  display: none;
  @media (max-width: 950px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
  }
`;

const Wrapper = styled.div`
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  width: 80%;
  max-width: 1200px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    ${(props) => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 14;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
    height: 100%;
    justify-content: end;
    width: 100%;
    overflow-y: scroll;
    top: 0;
    transform: none;
    left: 0;
    padding: 30px 6%;
  }
`;

const TierBackground = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
  pointer-events: inherit;
  @media (max-width: 950px) {
    display: none;
  }
`;

const Background = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: ${(props) =>
    props.visible ? "opacity 0.4s ease" : "opacity 0.4s 0.4s ease"};
  background-color: ${(props) => props.theme.colors.background};
`;
