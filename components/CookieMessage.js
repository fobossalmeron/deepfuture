import styled from "styled-components";
import Link from "next/link";
import Cross from "public/assets/img/layout/cross.svg";

const CookieMessage = (props) => {
  let t = props.locale.cookie_message;
  return (
    <Wrapper clickable={props.hasToConsent}>
      <Border>
        <Button onClick={props.doConsentToCookies}>
          <span>{t.title}</span>
        </Button>
        <CrossContainer onClick={props.doConsentToCookies}>
          <Cross />
        </CrossContainer>
        <Divider>
          <p>
            {t.p}
            <Link href="/cookies" passHref>
              <a>{t.link}</a>
            </Link>
            {t.p_continued}
          </p>
        </Divider>
      </Border>
    </Wrapper>
  );
};

export default CookieMessage;

const Border = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 15px 25px 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 14px 0%;
  text-align: center;
  width: calc(100% - 50px);
  background-color: ${(props) => props.theme.colors.home.accent};
  color: ${(props) => props.theme.colors.foreground};
  border: 0;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.colors.success};
      span {
        background-size: 0 0;
      }
    }
  }
`;

const Divider = styled.div`
  display: flex;
`;

const CrossContainer = styled.div`
  width: 79px;
  height: 84px;
  padding: 15px 25px;
  margin: 0;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  svg {
    width: 100%;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  max-width: 590px;
  width: 80%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%)
    ${(props) => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 12;
  p {
    font-size: 1.3rem;
    padding-top: 10px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 600px) {
    left: 0;
    transform: none;
    width: calc(100% - 36px);
    margin-left: 18px;
    margin-right: 18px;
    bottom: 18px;
    z-index: 100;
  }
`;
