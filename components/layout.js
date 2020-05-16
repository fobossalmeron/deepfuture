import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import { initGA, logPageView } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import Footer from "components/shared/Footer";

export default ({
  children,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale,
}) => {
  const [showConsentMessage, setShowConsentMessage] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // ReactPixel Config
    ReactPixel;
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("742484219622623", null, options);
  }, []);

  useEffect(() => {
    //Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    // ReactPixel
    ReactPixel.pageView();
  }, [router.route]);

  useEffect(() => {
    if (showConsentMessage) {
      document.body.onscroll = function () {
        checkScroll();
      };
    }
  }, []);

  const checkScroll = () => {
    if (document.body.scrollTop > 100 || window.scrollY > 100) {
      document.body.onscroll = null;
      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  const doConsentToCookies = () => {
    consentToCookies();
  };

  return (
    <>
      <PageWrapper id="Wrapper">
        <Header hasLoaded={hasLoaded} locale={locale} route={router.route} />
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

const BodyOverflow = createGlobalStyle`
  .TopBar{
    box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
  }
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
