import styled from "styled-components";
import { useEffect } from "react";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SalesCollector from "components/shared/SalesCollector";

const SalesPopup = ({ setShowSales, showSales, product, color }) => {
  useEffect(() => {
    showSales && popupShow();
    !showSales && unlockScreen();
  }, [showSales]);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#SalesPopup"); //dummy
    disableBodyScroll(targetElement);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#SalesPopup"); //dummy
    enableBodyScroll(targetElement);
    setShowSales(false);
  };

  return (
    <>
      <Wrapper clickable={showSales} id="SalesPopup">
        <Form color={color}>
          <Column>
            <h4>Nosotros te contactaremos</h4>
            <p>
              Déjanos tus datos y te contactará un asesor de ventas en las
              próximas 24 horas.
            </p>
          </Column>
          <Column>
            <SalesCollector product={product} />
          </Column>
        </Form>
        <CrossContainer>
          <Cross onClick={unlockScreen} />
        </CrossContainer>
      </Wrapper>
      <Background visible={showSales} onClick={unlockScreen} />
    </>
  );
};

export default SalesPopup;

const CrossContainer = styled.div`
  pointer-events: inherit;
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 2%;
  right: 1%;
  svg {
    width: 100%;
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    top: 2px;
    right: 2px;
  }
`;

const Form = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.accent};
  pointer-events: inherit;
  grid-column: 3 / span 8;
  border-radius: 5px;
  padding: 5% 6.5%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease-in;
  @media (max-width: 1200px) {
    grid-column: 2 / span 9;
  }
  @media (max-width: 1100px) {
    padding-right: 55px;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 950px) {
    grid-column: 1 / span 12;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 5% 6.5%;
    & > div {
      max-width: 100%;
      p {
        margin-bottom: 20px;
      }
    }
  }
`;

const Column = styled.div`
  pointer-events: inherit;
  max-width: 330px;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  :nth-of-type(1) {
    padding-right: 5%;
  }
  h4 {
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 23px;
    b {
      font-weight: 500;
    }
  }
  p {
    opacity: 1 !important;
  }
`;

const Background = styled.div`
  opacity: ${(props) => (props.visible ? 0.6 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: opacity 0.4s ease;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  width: 80%;
  max-width: 1000px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    ${(props) => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 14;
`;
