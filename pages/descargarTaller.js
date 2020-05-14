import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "components/Head";
import MainGrid from "components/shared/MainGrid";
import LandBg from "components/LandBg";
import {
  Message,
  Input,
  Label,
  Button,
  isEmail,
} from "components/shared/Forms";
import downloadWorkshop from "utils/downloadWorkshop";

function PagoConfirmado(props) {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [userEmail, setUserEmail] = useState(null);
  let email;

  const submit = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
      return false;
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
      return false;
    } else {
      setShowMessage(false), checkUserPurchase();
      return true;
    }
  };

  const checkUserPurchase = async () => {
    setStatus("sending");
    let userEmail = email.value;

    let requestOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.SENDINBLUE_API,
      },
    };

    const response = await fetch(
      `https://api.sendinblue.com/v3/contacts/${userEmail}`,
      requestOptions
    );

    const data = await response.json();

    if (data.code) {
      setMessage(
        `El correo ${userEmail} no ha comprado el Taller Autogestivo.`
      );
      setStatus("error");
      return;
    }
    const attributes = data.attributes;
    if (attributes.COMPROTIER1 && !attributes.DESCARGOTIER1) {
      setMessage(
        `Haz click en Descargar Taller para descargarlo, a tu correo ${userEmail} le queda (1) descarga.`
      );
      setStatus("success");
      console.log(
        "compró tier 1: " + attributes.COMPROTIER1 + ", no lo ha descargado."
      );
    } else if (attributes.COMPROTIER1 && attributes.DESCARGOTIER1) {
      setMessage(`Tu correo ${userEmail} ya descargó el taller.`);
      setStatus("error");
      console.log(
        "compró tier 1: " +
          attributes.COMPROTIER1 +
          ", descargó tier 1:" +
          attributes.DESCARGOTIER1
      );
    }
    //For reference on CancelFutureDownloads
    setUserEmail(userEmail);
  };

  const clickDownload = () => {
    downloadWorkshop();
    cancelFutureDownloads();
  };

  const cancelFutureDownloads = async () => {
    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.SENDINBLUE_API,
      },
      body: JSON.stringify({
        updateEnabled: true,
        email: userEmail,
        attributes: {
          DESCARGOTIER1: true,
        },
      }),
    };

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );
    const data = await response;
    console.log(data);

    setMessage(data.status === 204 && "Gracias por descargar");
    setShowMessage(true);
  };

  return (
    <>
      <Head
        title={"Deep Future Institute | Pago confirmado"}
        canonical={"https://deepfuture.institute/descargarTaller"}
        lang={props.lang}
      />
      <LandBg />
      <Land id="land">
        <div id="landtext">
          {status !== "success" && (
            <>
              <h2>Introduce tu email para descargar el taller</h2>
              <p>
                Por motivos de seguridad solo permitimos una descarga por
                usuario.
              </p>
            </>
          )}
          {status === "sending" && <Message>Recibiendo correo...</Message>}
          {showMessage ? (
            <Message
              error
              dangerouslySetInnerHTML={{ __html: displayMessage }}
            />
          ) : null}
          {status === "error" && (
            <Message
              error
              dangerouslySetInnerHTML={{ __html: displayMessage }}
            />
          )}
          {status === "success" && (
            <Message
              success
              dangerouslySetInnerHTML={{ __html: displayMessage }}
            />
          )}
          {status !== "success" && (
            <>
              <Label>
                <span>email</span>
                <Input
                  ref={(node) => (email = node)}
                  type="email"
                  placeholder="Email*"
                />
              </Label>
              <Button onClick={submit}>Descargar taller</Button>
            </>
          )}
          {status === "success" && !showMessage && (
            <Button onClick={clickDownload}>Descargar</Button>
          )}
        </div>
      </Land>
    </>
  );
}

export default React.memo(PagoConfirmado);

const Land = styled(MainGrid)`
  min-height: 100vh;
  align-items: center;
  padding-top: 13%;
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 870px;
      grid-column: 2 / span 8;
      b {
        font-weight: 500;
      }
    }
    h2 {
      font-size: 2.55rem;
      line-height: 135%;
      max-width: 650px;
      margin-top: 0;
    }
  }
`;
