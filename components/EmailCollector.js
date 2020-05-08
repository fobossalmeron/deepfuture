import styled from "styled-components";
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://studio.us19.list-manage.com/subscribe/post?u=c9d7bbb792de4cdbe363fad75&amp;id=434dbf9f3b";
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CustomForm = ({
  status,
  message,
  onValidated,
  enterprise,
  complete,
  short,
}) => {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  let email, name, industry, company, employees;

  const submitEnterprise = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!lastname.value) {
      setShowMessage(true), setMessage("Ingresa tu apellido");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false),
        onValidated({
          NAME: name.value,
          EMAIL: email.value,
          COMPANY: company.value,
          EMPLOYEES: employees.value,
        });
    }
  };

  const submitComplete = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false),
        onValidated({
          NAME: name.value,
          EMAIL: email.value,
          INDUSTRY: industry.value,
        });
    }
  };

  const submitShort = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false),
        onValidated({
          EMAIL: email.value,
        });
    }
  };

  return (
    <>
      {status === "sending" && <Message>Enviando...</Message>}
      {showMessage ? (
        <Message error dangerouslySetInnerHTML={{ __html: displayMessage }} />
      ) : null}
      {status === "error" && (
        <Message error dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === "success" && (
        <Message success dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status !== "success" && (
        <>
          <Label>
            <span>email</span>
            <Input
              ref={(node) => (email = node)}
              type="email"
              placeholder={short ? "Tu correo" : "Email"}
              short={short}
            />
          </Label>
          {!short && (
            <Label>
              <span>nombre</span>
              <Input
                ref={(node) => (name = node)}
                type="text"
                placeholder="Nombre"
              />
            </Label>
          )}
          {complete && (
            <Label>
              <span>industria</span>
              <Input
                ref={(node) => (industry = node)}
                type="text"
                placeholder="Industria"
              />
            </Label>
          )}
          {enterprise && (
            <>
              <Input
                ref={(node) => (company = node)}
                type="text"
                placeholder="compañía"
                id="compañía"
              />
              <Label htmlFor="compañía">compañía</Label>
              <Input
                ref={(node) => (employees = node)}
                type="text"
                placeholder="empleados"
                id="empleados"
              />
              <Label htmlFor="empleados">empleados</Label>
            </>
          )}
          <Button
            short={short}
            onClick={
              short ? submitShort : complete ? submitComplete : submitEnterprise
            }
          >
            {short ? "Descargar PDF gratuito" : "Descargar gratis"}
          </Button>
        </>
      )}
    </>
  );
};

const EmailCollector = ({ enterprise, complete, short }) => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          enterprise={enterprise}
          complete={complete}
          short={short}
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default EmailCollector;

const Message = styled.div`
  color: ${(props) =>
    props.error
      ? props.theme.colors.error
      : props.success
      ? props.theme.colors.success
      : props.theme.colors.accent};
  font-size: ${(props) => (props.success ? "1.8rem" : "1.5rem")};
  padding-bottom: 5px;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

const Label = styled.label`
  margin: 0;
  span {
    font-size: 0;
    height: 0;
    width: 0;
    position: absolute;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 18px 13px 26px;
  line-height: 100%;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: ${(props) => (props.short ? "4px 0px 0px 4px" : "4px")};
  border: none;
  font-size: 1.7rem;
  margin: 4px 0;
  height: 48px;
  color: ${(props) => props.theme.colors.foreground_lowest};
  -webkit-appearance: textfield;
  appearance: textfield;
  ::placeholder {
    padding-top: 4px;
    color: #31302e;
    opacity: 0.5;
  }
`;

const Button = styled.button`
  padding: 14px 0%;
  margin: 4px 0;
  text-align: center;
  width: ${(props) => (props.short ? "50%" : "100%")};
  background-color: ${(props) => props.theme.colors.cta};
  color: ${(props) => props.theme.colors.background};
  border: 0;
  font-size: 1.7rem;
  border-radius: ${(props) => (props.short ? "0px 4px 4px 0px" : "4px")};
  cursor: pointer;
  transition: 0.3s ease all;
`;
