import { useState } from "react";
import styled from "styled-components";
import {
  Message,
  Input,
  Label,
  Button,
  selectStyles,
  isEmail,
} from "components/shared/Forms";
import Cookies from "js-cookie/dist/js.cookie";
import Select from "react-select/";
import Mail from "public/assets/img/layout/icons/mail.svg";
import CircleIcon from "components/shared/CircleIcon";

const SalesCollector = () => {
  const [displayMessage, setMessage] = useState(false);
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

    const emailAddress = email.value;

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
        setStatus("success"),
        Cookies.set("userEmail", emailAddress))
      : (setMessage("Algo salió mal"), setStatus("error"));
  };

  const submitEnterprise = () => {
    if (!email.value) {
      setStatus("error"), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setStatus("error"), setMessage("Email en formato incorrecto");
    } else if (
      email.value.includes("@gmail.com") ||
      email.value.includes("@aol.com") ||
      email.value.includes("@icloud.com") ||
      email.value.includes("@me.com") ||
      email.value.includes("@msn.com") ||
      email.value.includes("@yahoo.com") ||
      email.value.includes("@live.com") ||
      email.value.includes("@hotmail.com")
    ) {
      setStatus("error"), setMessage("Ingresa un email de empresa");
    } else if (!name.value) {
      setStatus("error"), setMessage("Ingresa tu nombre");
    } else if (!company.value) {
      setStatus("error"), setMessage("Ingresa tu empresa");
    } else if (employeeOption === null) {
      setStatus("error"), setMessage("Selecciona tu número de empleados");
    } else {
      setStatus(""), call();
    }
  };

  return (
    <>
      {status === "sending" && <Message>Enviando...</Message>}
      {status === "error" && (
        <Message error dangerouslySetInnerHTML={{ __html: displayMessage }} />
      )}
      {status === "success" && (
        <Gracias>
          <Icon color={"#4F478B"}>
            <Mail />
          </Icon>
          <h5>¡Gracias!</h5>
          <p>Te contactaremos a la brevedad.</p>
        </Gracias>
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
                { value: "11-50", label: "11 - 50" },
                { value: "51-500", label: "51 - 500" },
                { value: "+500", label: "Más de 500" },
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

const Icon = styled(CircleIcon)`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  svg {
    padding: 22%;
  }
`;

const Gracias = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h5 {
    font-size: 2.4rem;
    margin: 10px 0;
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
`;
