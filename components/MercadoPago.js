import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Message,
  Input,
  Label,
  Button,
  isEmail,
} from "components/shared/Forms";
import Cookies from "js-cookie/dist/js.cookie";

const MercadoPago = ({product}) => {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [readyToPay, isReadyToPay] = useState(false);
  let email;

  const call = async () => {
    setStatus("sending");

    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.SENDINBLUE_API,
      },
      body: JSON.stringify({
        updateEnabled: true,
        email: email.value,
        listIds: [7],
        attributes: {
          Tier1: true,
        },
      }),
    };

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );
    const data = await response;
    console.log(data);
    data.status !== 400
      ? (setMessage("Gracias por comprar! Te llegará un email con tu producto"),
        setStatus("success"))
      : (setMessage("Algo salió mal"), setStatus("error"));
  };

  const validate = () => {
    console.log(product)
    console.log("validate called");
    if (!email.value) {
      setShowMessage(true), isReadyToPay(false), setMessage("Ingresa tu email");
      return false;
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true),
        isReadyToPay(false),
        setMessage("Email en formato incorrecto");
      return false;
    } else {
      setShowMessage(false), isReadyToPay(true);
      return true;
    }
  };

  const submit = () => {
    const tier1PayUrl = "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-ea18cbbb-bcfb-4dc5-9dc1-1061975d01fc"
    const tier2PayUrl = "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-d21f88c2-374c-4bfe-86eb-2edb5026a3db"
    if (product.id === 1){
      validate() && Cookies.set("comprarTier1", "true");
    } else if (product.id === 2){
      validate() && Cookies.set("comprarTier2", "true");
    }
    Cookies.set("userEmail", email.value);
    window.location.href =
      product.id === 1 ? tier1PayUrl : tier2PayUrl;
  };

  return (
    <>
      <Warning>
        <p>
          Escribe tu email
          <br />
          <span>
            Escríbelo con especial atención ya que a este correo enviaremos tu
            producto una vez realizada la compra.
          </span>
        </p>
      </Warning>
      {/* <a href="/pagoconfirmado">link</a> */}
      {status === "sending" && <Message>Enviando correo...</Message>}
      {showMessage ? (
        <Message error dangerouslySetInnerHTML={{ __html: displayMessage }} />
      ) : null}
      {status === "error" && (
        <Message error dangerouslySetInnerHTML={{ __html: displayMessage }} />
      )}
      {status === "success" && (
        <Message success dangerouslySetInnerHTML={{ __html: displayMessage }} />
      )}
      {status !== "success" && (
        <>
          <Label>
            <span>email</span>
            <Input
              ref={(node) => (email = node)}
              type="email"
              placeholder="Email*"
              onChange={validate}
            />
          </Label>
          <Button disabled={!readyToPay} onClick={submit}>
            Ir al pago
          </Button>
          {/* <a href="$$init_point$$" target="_blank">
            Pagar
          </a> */}

          {/* <form action="/procesar-pago" method="POST">
            <script
              src="https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js"
              data-preference-id="$$id$$"
            ></script>
          </form> */}
        </>
      )}
    </>
  );
};

export default MercadoPago;

const Warning = styled.div`
  margin-bottom: 10px;

  span {
    opacity: 0.8;
    font-size: 1.5rem;
    line-height: 100%;
  }
`;
