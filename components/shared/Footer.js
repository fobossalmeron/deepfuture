import styled from "styled-components";
import Imago from "public/assets/img/layout/logos/dfiimago.svg";

const Footer = () => (
  <FooterContainer>
    © Deep Future Institute, 2020
    {/* <Credit>
      Diseño y desarrollo por
      <a href="https://acueducto.studio/">
        <img
          src="https://acueducto.studio/assets/img/layout/logo.svg"
          alt="Acueducto, un estudio de diseño estratégico y tecnología en CDMX"
        />
      </a>
    </Credit> */}
    <Imago />
  </FooterContainer>
);

export default Footer;

// const Credit = styled.div`
//   img {
//     width: auto;
//     height: 10px;
//   }
// `;

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
    z-index: 0;
  }
  @media (max-width: 1600px) {
    padding: 20px 50px 3% 50px;
  }
  @media (max-width: 1600px) {
    padding: 20px 6% 20px 6%;
  }
`;
