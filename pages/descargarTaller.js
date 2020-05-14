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
import Tag from "components/shared/Tag";
import downloadWorkshop from "utils/downloadWorkshop";

function PagoConfirmado(props) {
  const [displayMessage, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [userEmail, setUserEmail] = useState(null);
  let email;

  const submit = () => {
    if (!email.value) {
      setMessage("Ingresa tu email"), setStatus("error");
      return false;
    } else if (!isEmail.test(email.value)) {
      setMessage("Email en formato incorrecto"), setStatus("error");
      return false;
    } else {
      checkUserPurchase();
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

    setStatus("thanks");
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
          <Tag color="#62AF9A">
            Taller <b>autogestivo</b>
          </Tag>
          <h3>Descarga el taller</h3>

          {(status !== "success" && status !== "thanks") && (
            <>
              <p>
                Introduce tu email para descargar el taller. Por motivos de
                seguridad solo permitimos una descarga por usuario.
              </p>
            </>
          )}
          {status === "sending" && <Message>Verificando correo...</Message>}
          {status === "error" && (
            <Message
              error
              dangerouslySetInnerHTML={{ __html: displayMessage }}
            />
          )}
          {(status !== "success" && status !== "thanks") && (
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
          {status === "success" && (
            <>
              <p>
                Después de descargar el archivo, ya no podrás hacerlo de nuevo,
                guárdalo en un lugar seguro.
                <br />
                <br />
                Cuenta: {userEmail}
              </p>
              <Button onClick={clickDownload}>Descargar</Button>
            </>
          )}
          {status === "thanks" && (
            <>
              <p>
                Gracias por descargar.
                <br />
                <br />
                Cuenta: {userEmail}
              </p>
            </>
          )}
        </div>
      </Land>
    </>
  );
}

export default React.memo(PagoConfirmado);

const Land = styled(MainGrid)`
  min-height: 93vh;
  align-items: center;
  padding-top: 13%;
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 3;
    padding-bottom: 7%;
    p {
      margin: 20px 0;
    }
    h3 {
      font-size: 3.6rem;
    }
  }
`;
