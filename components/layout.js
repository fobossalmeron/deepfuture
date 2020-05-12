import { useEffect, useState, useRef, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import { initGA, logPageView } from "utils/analytics";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NewsletterPopup from "components/NewsletterPopup";
import PayPopup from "components/PayPopup";
import Imago from "public/assets/img/layout/logos/dfiimago.svg";

export default ({
  children,
  toggleLang,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [headerTitle, setTitle] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const router = useRouter();
  const mouse = useRef([1200, 1]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    [mouse.current]
  );

  const onTouchMove = useCallback(
    (e) => {
      const touch = e.changedTouches[0];
      var x = touch.clientX;
      var y = touch.clientY;
      mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
    },
    [mouse.current]
  );

  useEffect(() => {
    // GTM
    const tagManagerArgs = {
      gtmId: "GTM-000000",
    };
    TagManager.initialize(tagManagerArgs);
    // ReactPixel
    // const options = {
    //   autoConfig: true,
    //   debug: false,
    // };
    // ReactPixel.init("506854653278097", null, options);
  }, []);

  useEffect(() => {
    //Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    // ReactPixel
    // ReactPixel.pageView(); // For tracking page view

    if (router.route === "/" || router.route === "/en") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [router.route]);

  useEffect(() => {
    if (showConsentMessage) {
      document.body.onscroll = function () {
        checkScroll();
      };
    }
  }, []);

  // useEffect(() => {
  //   let targetElement = document.querySelector("#Nav");
  //   if (isOpen) {
  //     disableBodyScroll(targetElement);
  //   } else {
  //     enableBodyScroll(targetElement);
  //   }
  // }, [isOpen]);

  const checkScroll = () => {
    if (document.body.scrollTop > 100 || window.scrollY > 100) {
      document.body.onscroll = null;
      // document.querySelector("#Clipper").onscroll = null;
      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const doConsentToCookies = () => {
    consentToCookies();
  };

  return (
    <>
      <PageWrapper
        id="Wrapper"
        // onMouseMove={isHome | isAbout ? onMouseMove : undefined}
        // onTouchMove={isHome | isAbout ? onTouchMove : undefined}
      >
        {!isHome && (
          <Header
            isOpen={isOpen}
            headerTitle={headerTitle}
            hasLoaded={hasLoaded}
            closeNav={closeNav}
            locale={locale}
            route={router.route}
          />
        )}
        {React.cloneElement(children, {
          setTitle: setTitle,
          hasLoaded: hasLoaded,
          mouse: mouse,
          setShowPopup: setShowPopup,
        })}
        <CookieMessage
          locale={locale}
          doConsentToCookies={doConsentToCookies}
          hasToConsent={hasToConsent}
        />
        <BodyOverflow isOpen={isOpen} hasLoaded={hasLoaded} />
        {showPopup && <NewsletterPopup setShowPopup={setShowPopup} />}
        <Footer>
          © Deep Future Institute, 2020
          <Imago />
        </Footer>
      </PageWrapper>
    </>
  );
};

const BodyOverflow = createGlobalStyle`
  .TopBar{
    box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
    #Wrapper{
      overflow: ${(props) => (props.hasLoaded ? "unset" : "hidden")};
      height:${(props) => (props.hasLoaded ? "unset" : "100%")};
    }
    body {
    overflow-y: ${(props) => (props.hasLoaded ? "auto" : "hidden")};
      &:after,&:before{
        content: " ";
        position: fixed;
        right: 0;
        left: 0;
        height: 18px;
        z-index:100;
        background-color: ${(props) => props.theme.colors.background};
      }
      &:before {
        top:0;
      }
      &:after {
        bottom:0;
      }
    }  
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.foreground_low};
  font-size: 1.5rem;
  padding-bottom: 3%;
  align-items: center;
  svg {
    width: 35px;
  }
`;

const BackgroundOpacity = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.visible ? 0.6 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: opacity 0.4s ease;
`;

const PageWrapper = styled.div`
  top: -3px;
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;

const Border = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  background-color: none;
  position: fixed;
  left: 18px;
  top: 18px;
  right: 18px;
  bottom: 18px;
  margin: 0 auto;
  max-width: 1504px;
  mix-blend-mode: exclusion;
  transition: opacity 0.3s ease-in, border 0.3s ease-in;
  border: ${(props) =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground}`};
  @media (max-width: 600px), (max-height: 450px) {
    mix-blend-mode: normal;
  }
`;
