import styled from "styled-components";
import { useState, useEffect } from "react";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { P, H2 } from "components/shared/Dangerously";
import PayCollector from "components/shared/PayCollector";
import MercadoPago from "components/MercadoPago";
import MercadoLogo from "public/assets/img/layout/logos/mercadopago.svg";

const PayPopup = ({ setShowPay, product }) => {
  const [internalShowPopup, setInternalShowPopup] = useState(false);

  useEffect(() => {
    popupShow();
    console.log(product);
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
          <P>{product.description}</P>
          <span>{product.price}</span>
        </Left>
        <Right>
          <MercadoPago />
          {/* <h4>Pago con tarjeta</h4>
          <CardOptions>
            <div>
              <h5>Tarjetas de crédito</h5>
              <img
                src="/assets/img/layout/cards1.png"
                alt="tarjetas de crédito"
              />
            </div>
            <div>
              <h5>Tarjetas de débito</h5>
              <img
                src="/assets/img/layout/cards2.png"
                alt="tarjetas de crédito"
              />
            </div>
          </CardOptions> */}
          {/* <PayCollector product={product} /> */}
          <Transacciones>
            <p>Transacciones seguras con</p>
            {/* <img
                src="/assets/img/layout/openpay.png"
                alt="tarjetas de crédito"
              /> */}
            <MercadoLogo />
          </Transacciones>
          {/* <div>
              Tus pagos se realizan de forma segura con encriptación de 256 bits
              <img
                src="/assets/img/layout/security.png"
                alt="tarjetas de crédito"
              />
            </div> */}
        </Right>
      </Wrapper>
      <Background visible={internalShowPopup}>
        <CrossContainer>
          <Cross onClick={unlockScreen} />
        </CrossContainer>
      </Background>
    </>
  );
};

export default PayPopup;

const Transacciones = styled.div`
  display: flex;
  align-items: center;
  svg {
    max-width: 45px;
    margin-left: 10px;
  }
`;

const Left = styled.div`
  padding-right: 5%;
  font-weight: 400;
  p {
    max-width: 80%;
  }
  span {
    font-size: 2.6rem;
    margin-top: 10px;
    display: block;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const CardOptions = styled.div`
  display: flex;
  img {
    max-height: 20px;
  }
`;

const Right = styled.div`
  h4 {
    font-size: 2rem;
  }
  h5 {
    margin: 10px 0 5px 0;
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
