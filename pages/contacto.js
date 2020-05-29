import Head from "components/Head";
import styled from "styled-components";
import { useState } from "react";
import SingleColumn from "components/shared/SingleColumn";
import BackgroundContact from "components/Backgrounds/BackgroundContact";
import MainGrid from "components/shared/MainGrid";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Contact(props) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);

  const setHovered = () => {
    setCopying(true);
  };

  const setUnhovered = () => {
    setCopying(false);
    setTimeout(function () {
      setCopied(false);
    }, 300);
  };

  const doSetCopied = () => {
    setCopied(true);
  };
  return (
    <>
      <Head
        title={"Contacto | Deep Future Institute"}
        canonical={"https://deepfuture.institute/contacto"}
        description={"¿Buscas prepararte para el futuro?"}
        lang={props.lang}
      />
      <BackgroundContact />
      <ContactGrid>
        <div>
          <h1>
            ¿Buscas <b>prepararte</b> para el futuro?
          </h1>
          <CopyToClipboard
            text={"contacto@deepfuture.institute"}
            onCopy={doSetCopied}
            onMouseEnter={setHovered}
            onMouseLeave={setUnhovered}
            onClick={setHovered}
          >
            <p>
              Escríbenos a{" "}
              <b>
                contacto@deepfuture.institute
                <CopyMessage reveal={copying}>
                  {copied ? "Copiado" : "Copiar al Clipboard"}
                </CopyMessage>
              </b>
            </p>
          </CopyToClipboard>
          <p>
            Oficinas Ciudad de México
            <br /> Insurgentes Sur #1168 - 404, 03100
          </p>
        </div>
      </ContactGrid>
    </>
  );
}

export default Contact;

const ContactGrid = styled(MainGrid)`
  padding: 8% 0 16%;
  pointer-events: none;
  min-height: 65vh;
  & > div {
    grid-column: 2 / span 10;
    z-index: 2;
    p {
      z-index: 1;
      pointer-events: auto;
      opacity: 1;
      color: ${(props) => props.theme.colors.foreground_low};
      &:nth-of-type(1) {
        z-index: 10;
        margin-bottom: 50px;
      }
      b {
        position: relative;
        color: ${(props) => props.theme.colors.foreground};
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1100px) {
    padding-top: 12%;
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 900px) {
    padding-right: 2%;
    padding-left: 2%;
    & > div {
      grid-column: 1 / span 12;
    }
    h1 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 600px) {
    padding-right: 5%;
    padding-left: 5%;
    h1 {
      font-size: 3rem;
    }
  }
`;

const CopyMessage = styled.span`
  position: absolute;
  opacity: ${(props) => (props.reveal ? 1 : 0)};
  bottom: -48px;
  top: 25px;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.home.accent};
  text-align: center;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: ${(props) =>
    props.reveal ? "0.3s ease all 0s" : "0.3s ease all"};
  &:before {
    content: " ";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${(props) => props.theme.colors.home.accent};
  }
`;
