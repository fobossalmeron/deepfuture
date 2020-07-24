import { useState } from "react";
import {
  Message,
  Input,
  Label,
  Button,
  isEmail,
} from "components/shared/Forms";
import Cookies from "js-cookie/dist/js.cookie";

const tier1PayUrl =
  "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-ea18cbbb-bcfb-4dc5-9dc1-1061975d01fc";
const tier1DiscountPayUrl =
  "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-eb83e54b-39b2-47fb-a2c9-5e8446c472b7";
const tier2PayUrl =
  "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=566499606-d21f88c2-374c-4bfe-86eb-2edb5026a3db";

const MercadoPago = ({ product, discounted }) => {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [readyToPay, isReadyToPay] = useState(false);
  let email;

  const addUserToAbandonedCart = async () => {
    setStatus("sending");
    var listIds = product.id === 1 ? [10] : [11];
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
        listIds: listIds,
      }),
    };

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );
    const data = await response;
    return data.status !== 400 ? false : true;
  };

  const validate = () => {
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
    setStatus("sending");
    if (product.id === 1) {
      validate() && Cookies.set("comprarTier1", "true");
    } else if (product.id === 2) {
      validate() && Cookies.set("adquirirTier2", "true");
    }
    Cookies.set("userEmail", email.value);
    addUserToAbandonedCart() &&
      (window.location.href =
        product.id === 1
          ? discounted
            ? tier1DiscountPayUrl
            : tier1PayUrl
          : tier2PayUrl);
  };

  return (
    <>
      {status === "sending" && <Message>Procesando...</Message>}
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
              placeholder="Tu email"
              onChange={validate}
            />
          </Label>
          <Button disabled={!readyToPay} onClick={submit}>
            Ir al pago
          </Button>
        </>
      )}
    </>
  );
};

export default MercadoPago;
