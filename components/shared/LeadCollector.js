import { useState} from "react";
import {
  Message,
  Input,
  Label,
  Button,
  selectStyles,
  isEmail,
} from "components/shared/Forms";
import SuccessConfirmation from "components/shared/SuccessConfirmation"
import Select from "react-select/";
import LinkedInTag from 'react-linkedin-insight';
import Cookies from "js-cookie/dist/js.cookie.mjs";

const LeadCollector = ({ complete, short, collectorId }) => {
  const [displayMessage, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [industryOption, setIndustryOption] = useState(null);

  const [status, setStatus] = useState("");
  let email, name;

  const handleIndustryChange = (selectedIndustry) => {
    setIndustryOption(selectedIndustry);
  };

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
        updateEnabled: false,
        email: email.value,
        listIds: [6],
        attributes: {
          FIRSTNAME: name ? name.value : " ",
          INDUSTRY: industryOption !== null ? industryOption.value : " ",
        },
      }),
    };

    const emailAddress = email.value;

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );

    const data = await response.json();

    setMessage(
      data.id
        ? `Gracias por descargar, enviaremos el PDF a tu correo.`
        : "El correo que ingresaste ya descargó el PDF"
    );
    setStatus(data.id ? "success" : "error");
    data.id && Cookies.set("userEmail", emailAddress);
    data.id && LinkedInTag.track(2186426); //descarga PDF

  };

  const submitComplete = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), call();
    }
  };

  const submitShort = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false), call();
    }
  };

  return (
    <>
      {status === "sending" && <Message short={short}>Enviando...</Message>}
      {showMessage && (
        //Mensajes de validación
        <Message
          short={short}
          error
          dangerouslySetInnerHTML={{ __html: displayMessage }}
        />
      )}
      {status === "error" && (
        <Message
          short={short}
          error
          dangerouslySetInnerHTML={{ __html: displayMessage }}
        />
      )}
      {status === "success" && short && (
        <>
          <Message
            short={short}
            success
            dangerouslySetInnerHTML={{ __html: displayMessage }}
          />
        </>
      )}
      {status === "success" && complete && (
        <SuccessConfirmation>
          <h5>¡Gracias por descargar! </h5>
          <p>Enviaremos el PDF a tu correo.</p>
        </SuccessConfirmation>
      )}
      {status !== "success" && (
        <>
          <Label short={short}>
            <span>email</span>
            <Input
              ref={(node) => (email = node)}
              type="email"
              placeholder={short ? "Tu correo" : "Email*"}
              short={short}
            />
          </Label>
          {complete && (
            <>
              <Label>
                <span>nombre</span>
                <Input
                  ref={(node) => (name = node)}
                  type="text"
                  placeholder="Nombre*"
                />
              </Label>
              <Label>
                <span>industria</span>
                <Select
                  styles={selectStyles}
                  placeholder="Industria"
                  instanceId={"Industria" + collectorId}
                  isSearchable={false}
                  options={[
                    { value: "B2C", label: "Servicios al consumidor" },
                    { value: "B2B", label: "Servicios B2B" },
                    { value: "Manufactura", label: "Manufactura" },
                    { value: "Energía", label: "Energía" },
                    { value: "Minería", label: "Minería" },
                    { value: "Agricultura", label: "Agricultura" },
                    { value: "Otro", label: "Otro" },
                  ]}
                  value={industryOption}
                  onChange={handleIndustryChange}
                ></Select>
              </Label>
            </>
          )}
          <Button short={short} onClick={short ? submitShort : submitComplete}>
            {short && "Descargar PDF gratuito"}
            {complete && "Descargar gratis"}
          </Button>
        </>
      )}
    </>
  );
};

export default LeadCollector;