// import { useState, useEffect } from "react";
// import styled from "styled-components";
// // import { Formik, Form, Field, ErrorMessage } from "formik";

// const PayCollector = ({ product }) => {
//   let device_session_id;

//   useEffect(() => {
//     console.log(product);
//     OpenPay.setId(process.env.OPENPAY_ID);
//     OpenPay.setApiKey(process.env.OPENPAY_PUBLIC);
//     OpenPay.setSandboxMode(true);
//     console.log("open pay in sandbox: " + OpenPay.getSandboxMode());
//     device_session_id = OpenPay.deviceData.setup();
//   }, []);

//   const onSuccess = (response) => {
//     alert("Operación exitosa");
//     var content = `
//     Id tarjeta: ${response.data.id}
//     A nombre de: ${response.data.holder_name}
//     Marca de tarjeta usada: ${response.data.brand}`;
//     console.log(content);

//     var chargeRequest = {
//       source_id: response.data.id,
//       method: "card",
//       amount: 5,
//       description: product.description,
//       device_session_id: device_session_id,
//       // 'customer' : {
//       //      'name' : name,
//       //      'last_name' : last_name,
//       //      'phone_number' : phone_number,
//       //      'email' : email
//       // }
//     };
//     // Esto nos tira error, dice que charges no existe, creo que es por que es código de servidor
//     // OpenPay.customers.charges.create(chargeRequest, function (error, charge) {
//     //   console.log(error ? error : charge ? charge : "no hubo respuesta");
//     // });
//   };

//   const onError = (response) => {
//     alert("Fallo en la transacción");
//     var content = `
//     Estatus del error: ${response.data.status}
//     Error: ${response.message}
//     Marca de tarjeta usada: ${response.data.description}
//     ID de la petición: ${response.data.request_id}`;
//     console.log(content);
//   };

//   const createToken = (
//     card_number,
//     holder_name,
//     expiration_year,
//     expiration_month,
//     cvv2
//   ) =>
//     OpenPay.token.create(
//       {
//         card_number: "4111111111111111",
//         holder_name: "Juan Perez Ramirez",
//         expiration_year: "20",
//         expiration_month: "12",
//         cvv2: "110",
//         // address: {
//         //   city: "Querétaro",
//         //   line3: "Queretaro",
//         //   postal_code: "76900",
//         //   line1: "Av 5 de Febrero",
//         //   line2: "Roble 207",
//         //   state: "Queretaro",
//         //   country_code: "MX",
//         // },
//       },
//       onSuccess,
//       onError
//     );

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         holder_name: "",
//         card_number: "",
//         expiration_year: "",
//         expiration_month: "",
//         cvv2: "",
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Email requerido";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Email inválido";
//         }
//         if (!values.holder_name) {
//           errors.holder_name = "Ingresa el nombre del titular";
//         }
//         if (!values.card_number) {
//           errors.card_number = "Ingresa el número de tarjeta";
//         } else if (!OpenPay.card.validateCardNumber(values.card_number)) {
//           errors.card_number = "Numero de tarjeta inválido";
//         }
//         if (!values.expiration_month) {
//           errors.expiration_month = "Ingresa mes de expiración";
//         } else if (!values.expiration_year) {
//           errors.expiration_month = "Ingresa año de expiración";
//         } else if (
//           !OpenPay.card.validateExpiry(
//             values.expiration_month,
//             values.expiration_year
//           )
//         ) {
//           errors.expiration_month = "Fecha de expiración inválida";
//         }
//         if (!values.cvv2) {
//           errors.cvv2 = "Ingresa el código de seguridad";
//         } else if (!OpenPay.card.validateCVC(values.cvv2)) {
//           errors.cvv2 = "CVV inválido";
//         } else if (!OpenPay.card.validateCVC(values.cvv2, values.card_number)) {
//           errors.cvv2 = "CVV inválido para esta tarjeta";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           // alert(JSON.stringify(values, null, 2));
//           OpenPay.token.create(
//             {
//               card_number: values.card_number,
//               holder_name: values.holder_name,
//               expiration_year: values.expiration_year,
//               expiration_month: values.expiration_month,
//               cvv2: values.cvv2,
//               address: {
//                 city: "Querétaro",
//                 line3: "Queretaro",
//                 postal_code: "76900",
//                 line1: "Av 5 de Febrero",
//                 line2: "Roble 207",
//                 state: "Queretaro",
//                 country_code: "MX",
//               },
//             },
//             onSuccess,
//             onError
//           );
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <FormStyled>
//             <label htmlFor="email">Email</label>
//             <Field type="email" name="email" placeholder="Tu Email" />
//             <ErrorMessageS name="email" component="div" />
//             <label htmlFor="holder_name">Nombre</label>
//             <Field
//               type="holder_name"
//               name="holder_name"
//               placeholder="Como aparece en la tarjeta"
//             />
//             <ErrorMessageS name="holder_name" component="div" />
//             <label htmlFor="card_number">Número de tarjeta</label>
//             <Field
//               type="card_number"
//               name="card_number"
//               placeholder="Número de tarjeta"
//             />
//             <ErrorMessageS name="card_number" component="div" />
//             <h5>Fecha de expiración</h5>
//             <Date>
//               <div>
//                 <label htmlFor="expiration_month">Mes</label>
//                 <Field
//                   type="expiration_month"
//                   name="expiration_month"
//                   placeholder="Mes"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="expiration_year">Año</label>
//                 <Field
//                   type="expiration_year"
//                   name="expiration_year"
//                   placeholder="Año"
//                 />
//               </div>
//             </Date>
//             <ErrorMessageS name="expiration_month" component="div" />
//             <ErrorMessageS name="expiration_year" component="div" />
//             <label htmlFor="cvv2">CVV</label>
//             <Field type="cvv2" name="cvv2" placeholder="CVV" />
//             <ErrorMessageS name="cvv2" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               Pagar
//             </button>
//           </FormStyled>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// const LeadCollector = ({ complete, short, collectorId }) => {
//   const [displayMessage, setMessage] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const [industryOption, setIndustryOption] = useState(null);

//   const [status, setStatus] = useState("");

//   const call = async () => {
//     setStatus("sending");

//     let requestOptions = {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         "api-key": process.env.SENDINBLUE_API,
//       },
//       body: JSON.stringify({
//         updateEnabled: false,
//         email: email.value,
//         listIds: [6],
//         attributes: {
//           FIRSTNAME: name ? name.value : " ",
//           INDUSTRY: industryOption !== null ? industryOption.value : " ",
//         },
//       }),
//     };

//     const response = await fetch(
//       "https://api.sendinblue.com/v3/contacts",
//       requestOptions
//     );
//     const data = await response;
//     console.log(data);
//     data.status !== 400
//       ? (setMessage(
//           "Gracias! Un asesor te contactará dentro de 24 horas hábiles"
//         ),
//         setStatus("success"))
//       : (setMessage("Algo salió mal"), setStatus("error"));
//   };

//   return (
//     <>
//       {status === "sending" && <Message short={short}>Enviando...</Message>}
//       {showMessage && (
//         //Mensajes de validación
//         <Message
//           short={short}
//           error
//           dangerouslySetInnerHTML={{ __html: displayMessage }}
//         />
//       )}
//       {status === "error" && (
//         <Message
//           short={short}
//           error
//           dangerouslySetInnerHTML={{ __html: displayMessage }}
//         />
//       )}
//       {status === "success" && (
//         <Message
//           short={short}
//           success
//           dangerouslySetInnerHTML={{ __html: displayMessage }}
//         />
//       )}
//       {status !== "success" && (
//         <>
//           <Label short={short}>
//             <span>email</span>
//             <Input
//               ref={(node) => (email = node)}
//               type="email"
//               placeholder={short ? "Tu correo" : "Email*"}
//               short={short}
//             />
//           </Label>
//           {complete && (
//             <>
//               <Label>
//                 <span>nombre</span>
//                 <Input
//                   ref={(node) => (name = node)}
//                   type="text"
//                   placeholder="Nombre*"
//                 />
//               </Label>
//               <Label>
//                 <span>industria</span>
//                 <Select
//                   styles={selectStyles}
//                   placeholder="Industria"
//                   instanceId={"Industria" + collectorId}
//                   isSearchable={false}
//                   options={[
//                     { value: "Aviación", label: "Aviación" },
//                     { value: "Automotriz", label: "Automotriz" },
//                     { value: "Cine", label: "Cine" },
//                     { value: "Hospitalaria", label: "Hospitalaria" },
//                   ]}
//                   value={industryOption}
//                   onChange={handleIndustryChange}
//                 ></Select>
//               </Label>
//             </>
//           )}
//           <Button short={short} onClick={short ? submitShort : submitComplete}>
//             {short && "Descargar PDF gratuito"}
//             {complete && "Descargar gratis"}
//           </Button>
//         </>
//       )}
//     </>
//   );
// };

// export default PayCollector;

// const ErrorMessageS = styled(ErrorMessage)`
//   color: ${(props) => props.theme.colors.error};
// `;

// const FormStyled = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Date = styled.div`
//   display: flex;
//   label {
//     font-size: 0;
//     position: absolute;
//   }
// `;
