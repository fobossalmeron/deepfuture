import Link from "next/link";
import styled from "styled-components";
import Logo from "public/assets/img/layout/logos/dfilogo.svg";
import EmailCollector from "components/EmailCollector";

function Header({ hasLoaded, headerTitle, isOpen, closeNav, locale, route }) {
  const backUp = (e) => {
    closeNav();
    route === "/" &&
      (e.preventDefault(),
      document.getElementById("land").scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <TopHeader reveal={hasLoaded}>
      <HeaderContainer>
        <Link href="/" passHref>
          <LogoLink onClick={backUp}>
            <h1>DFI</h1>
            <Logo />
          </LogoLink>
        </Link>
        <Form>
          <EmailCollector short />
        </Form>
      </HeaderContainer>
    </TopHeader>
  );
}
export default React.memo(Header);

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TopHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 11px 80px 11px 50px;
  z-index: 12;
  opacity: ${(props) => (props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease 0.3s;
  box-shadow: ${(props) => `9px 9px 25px ${props.theme.colors.darkshadow}`};
`;

const LogoLink = styled.a`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  pointer-events: auto;
  h1 {
    font-size: 0;
  }
  svg {
    max-width: 70px;
    width: 100%;
    path {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  align-self: flex-end;
  display: flex;
`;
