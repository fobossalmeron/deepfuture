import styled from "styled-components";
import { useState, useEffect } from "react";
import { darken, lighten, readableColor } from "polished";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { H2, H3 } from "components/shared/Dangerously";
import MercadoPago from "components/MercadoPago";
import MercadoLogo from "public/assets/img/layout/logos/mercadopago.svg";
import currency from "currency.js";
import Forms from "public/assets/img/layout/icons/forms.svg";
import Sheets from "public/assets/img/layout/icons/sheets.svg";
import Meet from "public/assets/img/layout/icons/meet.svg";
import Pdf from "public/assets/img/layout/icons/pdf.svg";
import CircleIcon from "components/shared/CircleIcon";
import Footer from "components/shared/Footer";

const PayPopup = ({ setShowPay, product }) => {
  const [internalShowPopup, setInternalShowPopup] = useState(false);

  useEffect(() => {
    popupShow();
  }, []);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#PayPopup"); //dummy
    disableBodyScroll(targetElement);
    setInternalShowPopup(true);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#PayPopup"); //dummy
    enableBodyScroll(targetElement);
    setInternalShowPopup(false);
    setShowPay(false);
  };

  return (
    <>
      <Wrapper clickable={internalShowPopup} id="PayPopup">
        <Left>
          <H2>{`Taller <b>${product.title}</b>`}</H2>
          <H3>{product.subtitle}</H3>
          <p>{product.description}</p>
          <span>
            {currency(product.price, {
              symbol: "$",
              formatWithSymbol: true,
            }).format()}{" "}
            <span>MXN</span>
          </span>
          <Icons>
            {product.id === 1 && (
              <>
                <Icon dark>
                  <Sheets />
                </Icon>
                <Icon dark>
                  <Pdf />
                </Icon>
              </>
            )}
            {product.id === 2 && (
              <>
                <Icon dark>
                  <Sheets />
                </Icon>
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
        <Right color={product.color}>
          <Panel color={product.color}>
            <Warning>
              <span>
                *Confirma que tu correo sea correcto ya que ahí recibirás el
                taller una vez realizada tu compra.
              </span>
            </Warning>
            <MercadoPago product={product} />
          </Panel>
          <SmallPrint>
            <Transacciones>
              <p>Transacciones seguras con</p>
              <MercadoLogo />
            </Transacciones>
            <p>
              Aceptamos todas las tarjetas y pagos en tiendas de autoservicio.
              Consulta nuestros Términos y Condiciones.
            </p>
          </SmallPrint>
        </Right>
      </Wrapper>
      <Background visible={internalShowPopup}>
        <TierBackground color={product.color} />
        <CrossContainer>
          <Cross onClick={unlockScreen} />
        </CrossContainer>
        <FooterStyled>
          <Footer />
        </FooterStyled>
      </Background>
    </>
  );
};

export default PayPopup;

const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  width:100%;
  margin:0 auto;
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
  p {
    font-size: 2.1rem !important;
  }
`;

const Right = styled.div`
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
`;

const Panel = styled.div`
  padding: 8%;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  position: relative;
  box-shadow: ${(props) =>
    `-5px -5px 15px ${lighten(0.05, `${props.color}`)},
    4px 3px 11px ${darken(0.05, `${props.color}`)}`};
`;

const Left = styled.div`
  max-width: 430px;
  font-weight: 400;
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
  h2 {
    font-weight: 300;
    b {
      font-weight: 400;
    }
  }
  h3 {
    padding-top: 10px;
    font-size: 2.4rem;
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
`;

const Icons = styled.div`
  display: flex;
  margin-top: 10%;
`;

const Icon = styled(CircleIcon)`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  svg {
    padding: 24%;
  }
`;

const CrossContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
  svg {
    width: 100%;
    cursor: pointer;
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
`;

const TierBackground = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: ${(props) => props.color};
  position: absolute;
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
  transition: opacity 0.4s ease;
  background-color: ${(props) => props.theme.colors.background};
`;
