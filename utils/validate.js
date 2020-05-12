export const validate = async (email) => {
  console.log(email)
  let requestOptions = {
    // mode: "no-cors",
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      // "access-control-allow-origin" : "http://localhost:3000",
      "api-key": process.env.SENDINBLUE_API,
      "ma-key": process.env.SENDINBLUE_API,
    },
    body: JSON.stringify({
      // updateEnabled: true,
      email: email,
    }),
  };

  const response = await fetch(
    "https://in-automate.sendinblue.com/api/v2/identify",
    requestOptions
  );
  const data = await response;
  console.log(data);
};
