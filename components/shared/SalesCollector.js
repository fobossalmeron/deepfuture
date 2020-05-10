import { useState, useEffect } from "react";
import {
  Message,
  Input,
  Label,
  Button,
  selectStyles,
  isEmail,
} from "components/shared/Forms";
import Select from "react-select/";

const SalesCollector = () => {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [employeeOption, setEmployeeOption] = useState(null);
  const [status, setStatus] = useState("");
  let email, name, company;

  const handleEmployeeChange = (selectedEmployee) => {
    setEmployeeOption(selectedEmployee);
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
        updateEnabled: true,
        email: email.value,
        listIds: [9],
        attributes: {
          FIRSTNAME: name.value,
          COMPANY: company.value,
          EMPLOYEES: employeeOption.value,
        },
      }),
    };

    console.log(employeeOption);

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );
    const data = await response;
    console.log(data);
    data.status !== 400
      ? (setMessage(
          "Gracias! Un asesor te contactará dentro de 24 horas hábiles"
        ),
        setStatus("success"))
      : (setMessage("Algo salió mal"), setStatus("error"));
  };

  const submitEnterprise = () => {
    if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else if (!company.value) {
      setShowMessage(true), setMessage("Ingresa tu empresa");
    } else if (employeeOption === null) {
      setShowMessage(true), setMessage("Selecciona tu número de empleados");
    } else {
      setShowMessage(false), call();
    }
  };

  return (
    <>
      {status === "sending" && <Message>Enviando...</Message>}
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
            />
          </Label>
          <Label>
            <span>nombre</span>
            <Input
              ref={(node) => (name = node)}
              type="text"
              placeholder="Nombre*"
            />
          </Label>
          <Label>
            <span>empresa</span>
            <Input
              ref={(node) => (company = node)}
              type="text"
              placeholder="Empresa*"
            />
          </Label>
          <Label>
            <span>Número de empleados</span>
            <Select
              styles={selectStyles}
              placeholder="Número de empleados"
              instanceId="Employees"
              isSearchable={false}
              options={[
                { value: "1-10", label: "1 - 10" },
                { value: "10-100", label: "10 - 100" },
                { value: "10-1000", label: "100 - 1000" },
                { value: "+1000", label: "Más de 1000" },
              ]}
              value={employeeOption}
              onChange={handleEmployeeChange}
            ></Select>
          </Label>
          <Button onClick={submitEnterprise}>Contactar asesor</Button>
        </>
      )}
    </>
  );
};

export default SalesCollector;
