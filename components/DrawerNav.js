import ActiveLink from "components/shared/ActiveLink";
import styled from "styled-components";

function DrawerNav({ route, isOpen, closeNav }) {
  return (
    <TopHeader open={isOpen} id="Nav">
      <HeaderContainer>
        <Nav onClick={closeNav}>
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
          <Secondary>
            <ActiveLink href="/privacidad" passHref>
              <NavLink secondary>Política de Privacidad</NavLink>
            </ActiveLink>
            <ActiveLink href="/cookies" passHref>
              <NavLink secondary>Política de Cookies</NavLink>
            </ActiveLink>
            <ActiveLink href="/terminos" passHref>
              <NavLink secondary>Términos y Condiciones</NavLink>
            </ActiveLink>
          </Secondary>
        </Nav>
      </HeaderContainer>
    </TopHeader>
  );
}
export default DrawerNav;

const Secondary = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: ${(props) => (props.secondary ? 300 : 400)};
  opacity: ${(props) => (props.secondary ? 0.8 : 1)};
  font-size: ${(props) => (props.secondary ? "2.1rem" : "3rem")};
  border-bottom: ${(props) =>
    props.active
      ? `3px solid ${props.theme.colors.background}`
      : "3px solid transparent"};
  transition: 0.2s ease all;
  margin-bottom: 10px;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.colors.background};
    }
  }
  @media (max-width: 550px) {
    font-size: ${(props) => (props.secondary ? "1.8rem" : "2.4rem")};
  }
  @media (max-width: 400px) {
    font-size: ${(props) => (props.secondary ? "1.8rem" : "2rem")};
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 600px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: flex-start;
`;

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const TopHeader = styled.div`
  background-color: ${(props) => props.theme.colors.home.accent};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
  padding: 11px 50px;
  display: flex;
  align-items: center;
  transition: 0.3s ease-out transform;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  @media (max-width: 550px) {
    padding: 11px 5%;
  }
`;
