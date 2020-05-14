import styled from "styled-components";
import Imago from "public/assets/img/layout/logos/dfiimago.svg"

const Footer = () => (
  <FooterContainer>
    © Deep Future Institute, 2020
    <Imago />
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
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
    z-index:0;
  }
`;