import Link from "next/link";
import ActiveLink from "components/shared/ActiveLink";
import styled, { css } from "styled-components";
import Logo from "public/assets/img/layout/logos/dfilogo.svg";
import LeadCollector from "components/shared/LeadCollector";
import Hamburger from "public/assets/img/layout/hamburger.svg";

function Header({ hasLoaded, route, production, toggleNav, isOpen }) {
  const backUp = (e) => {
    // closeNav();
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
        {route === "/tallerescovid" ? (
          <HeaderCovidCollector>
            <LeadCollector
              production={production}
              short
              collectorId="smallCollector"
            />
          </HeaderCovidCollector>
        ) : (
          <Nav>
            <ActiveLink href="/tallerescovid" passHref>
              <NavLink>
                Talleres <span>COVID + 4T</span>
              </NavLink>
            </ActiveLink>
            <ActiveLink href="/escenariosderiesgo" passHref>
              <NavLink>
                Estudio
                <span>
                  <i> Escenarios de Riesgo</i>
                </span>
              </NavLink>
            </ActiveLink>
            <ActiveLink href="/nosotros" passHref>
              <NavLink>Nosotros</NavLink>
            </ActiveLink>
            <ActiveLink href="/blog" passHref>
              <NavLink>Blog</NavLink>
            </ActiveLink>
          </Nav>
        )}
        <Trigger onClick={toggleNav} open={isOpen}>
          <Hamburger />
        </Trigger>
      </HeaderContainer>
    </TopHeader>
  );
}
export default Header;

const Trigger = styled.div`
  pointer-events: auto;
  cursor: pointer;
  width: 40px;
  position: relative;
  justify-self: flex-end;
  display: none;
  @media (max-width: 850px) {
    display: block;
  }

  svg {
    width: 100%;
    height: auto;
    max-width: 40px;
    padding-top: 13px;
    @media (max-width: 750px) {
      padding-top: 7px;
    }
    @media (max-width: 600px) {
      padding-top: 4px;
    }
    line {
      stroke-width: 2px;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke: ${(props) => props.theme.colors.foreground};
      transition: transform 0.3s ease;
      &#bot {
        transition: transform 0.3s ease;
      }
    }
  }
  ${(props) =>
    props.open &&
    css`
      svg {
        #top {
          transform: translateX(-30px);
        }
        #bot {
          transform: translateX(16px);
        }
      }
    `}
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  border-bottom: ${(props) =>
    props.active
      ? `2px solid ${props.theme.colors.home.accent}`
      : "2px solid transparent"};
  transition: 0.2s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.home.accent};
    }
  }
  &:not(:last-of-type) {
    margin-right: 5%;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 600px;
  align-self: flex-end;
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const TopHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 11px 50px;
  display: flex;
  align-items: center;
  z-index: 12;
  height: 78px;
  opacity: ${(props) => (props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease 0.3s;
  box-shadow: ${(props) => `9px 9px 25px ${props.theme.colors.darkshadow}`};
  @media (max-width: 750px) {
    height: 63px;
  }
  @media (max-width: 600px) {
    padding: 11px 6%;
    height: 58px;
  }
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

const HeaderCovidCollector = styled.div`
  width: 100%;
  max-width: 500px;
  align-self: flex-end;
  display: flex;
  @media (max-width: 850px) {
    display: none;
    max-width: 400px;
    label,
    button,
    input {
      height: 100%;
      margin: 0;
    }
    button {
      margin: 0;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
