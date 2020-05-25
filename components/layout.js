import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import { initGA, logPageView } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import LinkedInTag from "react-linkedin-insight";
import Footer from "components/shared/FooterNav";

export default ({
  children,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale,
  production,
}) => {
  const [showConsentMessage, setShowConsentMessage] = useState(true);
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
        <Header
          production={production}
          hasLoaded={hasLoaded}
          locale={locale}
          route={router.route}
        />
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
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 78px;
`;
