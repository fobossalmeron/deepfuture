import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Header from "./header";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import { initGA, logPageView } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import LinkedInTag from "react-linkedin-insight";
import Footer from "components/shared/FooterNav";
import DrawerNav from "components/DrawerNav";

const Layout = ({
  children,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale,
  production,
}) => {
  const [showConsentMessage, setShowConsentMessage] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // ReactPixel Config
    if (production) {
      ReactPixel;
      const options = {
        autoConfig: true,
        debug: false,
      };
      ReactPixel.init("3267371289963128", null, options);
      LinkedInTag.init(2026962);
    }
  }, []);

  useEffect(() => {
    if (production) {
      //Google Analytics
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();

      // ReactPixel
      ReactPixel.pageView();
    }
  }, [router.route]);

  useEffect(() => {
    if (showConsentMessage) {
      document.body.onscroll = function () {
        checkScroll();
      };
    }
  }, []);

  useEffect(() => {
    let targetElement = document.querySelector("#Nav");
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  }, [isOpen]);

  const checkScroll = () => {
    if (document.body.scrollTop > 100 || window.scrollY > 100) {
      document.body.onscroll = null;
      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  const toggleNav = () => {
    console.log("open nav");
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
      <PageWrapper id="Wrapper">
        <Header
          production={production}
          hasLoaded={hasLoaded}
          locale={locale}
          route={router.route}
          isOpen={isOpen}
          closeNav={closeNav}
          toggleNav={toggleNav}
        />
        <DrawerNav toggleNav={toggleNav} closeNav={closeNav} isOpen={isOpen} />
        {React.cloneElement(children, {
          hasLoaded: hasLoaded,
        })}
        <CookieMessage
          locale={locale}
          doConsentToCookies={doConsentToCookies}
          hasToConsent={hasToConsent}
        />
        <BodyOverflow hasLoaded={hasLoaded} />
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

const BodyOverflow = createGlobalStyle`
  .TopBar{
    box-shadow: 1px 1px 4px ${(props) => props.theme.colors.home.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
  }
`;

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 78px;
  overflow-x: hidden;
`;
