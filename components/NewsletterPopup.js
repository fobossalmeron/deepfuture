import styled from "styled-components";
import { useState, useEffect } from "react";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SalesForm from "components/SalesForm";

const NewsletterPopup = ({ setShowPopup }) => {
  const [internalShowPopup, setInternalShowPopup] = useState(false);

  useEffect(() => {
    popupShow();
  }, []);

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy
    disableBodyScroll(targetElement);
    setInternalShowPopup(true);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy
    enableBodyScroll(targetElement);
    setInternalShowPopup(false);
    setShowPopup(false);
  };

  return (
    <>
      <Wrapper clickable={internalShowPopup} id="NewsletterPopup">
        <SalesForm />
        <CrossContainer>
          <Cross onClick={unlockScreen} />
        </CrossContainer>
      </Wrapper>
      <Background visible={internalShowPopup} onClick={unlockScreen} />
    </>
  );
};

export default NewsletterPopup;

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

const CrossContainer = styled.div`
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
