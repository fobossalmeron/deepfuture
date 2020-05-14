import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "components/Head";
import MainGrid from "components/shared/MainGrid";
import LandBg from "components/LandBg";
import Cookies from "js-cookie/dist/js.cookie";
import { Button } from "components/shared/Forms";
import downloadWorkshop from "utils/downloadWorkshop";
import Tag from "components/shared/Tag";

const production = false;

function PagoConfirmado(props) {
  const [userDidPay, setUserDidPay] = useState(false);
  const [userEmail, getUserEmail] = useState(null);
  const [productBought, setProductBought] = useState(null);

  useEffect(() => {
    var ref = document.referrer;
    console.log(ref);
    if (!ref.includes("mercadopago")) {
      if (production) {
        window.location.replace("/");
        console.log("No viene de mercadopago");
      }
    }
    var _tier1 = Cookies.get("comprarTier1");
    var _tier2 = Cookies.get("adquirirTier2");
    if (_tier1 === undefined && _tier2 === undefined) {
      if (production) {
        window.location.replace("/");
        console.log("No hubo cookies");
      }
    }
    if (_tier1 === "true") {
      console.log("Cookie dice compro tier 1", _tier1);
      setUserDidPay(true);
      setProductBought(1);
      if (production) {
        Cookies.remove("comprarTier1");
      }
    }
    if (_tier2 === "true") {
      console.log("Cookie dice compro tier 2", _tier2);
      setUserDidPay(true);
      setProductBought(2);
      Cookies.remove("adquirirTier2");
    }
    var _email = Cookies.get("userEmail");
    if (_email === undefined) {
      setUserDidPay(false);
    } else {
      getUserEmail(_email);
    }
  }, []);

  // useEffect(() => {
  //   if (productBought === 1) {
  //     console.log("ey");

  //     downloadWorkshop();
  //   }
  // }, [productBought]);

  useEffect(() => {
    console.log(userDidPay, productBought);
    if (userDidPay) {
      setUserPayAttributesAndLists();
    }
  }, [userDidPay]);

  const setUserPayAttributesAndLists = async () => {
    var attributes =
      productBought === 1 ? { COMPROTIER1: true } : { COMPROTIER2: true };
    var listIds = productBought === 1 ? [7] : [8];
    var _email = Cookies.get("userEmail");

    let requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.SENDINBLUE_API,
      },
      body: JSON.stringify({
        updateEnabled: true,
        email: _email,
        attributes: attributes,
        listIds: listIds,
      }),
    };

    const response = await fetch(
      "https://api.sendinblue.com/v3/contacts",
      requestOptions
    );
    const data = await response;
    console.log(data);
  };

  return (
    <>
      <Head
        title={"Deep Future Institute | Pago confirmado"}
        canonical={"https://deepfuture.institute/pagoconfirmado"}
        lang={props.lang}
      />
      <LandBg />
      <Land id="land">
        <div id="landtext">
          {userDidPay && productBought === 1 && (
            <>
              <Tag color="#62AF9A">
                Taller <b>autogestivo</b>
              </Tag>
              <h3>¡Gracias por tu pago!</h3>
              <p>
                Haz click en el botón para descargar tu taller. De igual forma
                te será enviado a {userEmail}.
              </p>
              <Button onClick={downloadWorkshop}>Descargar taller</Button>
            </>
          )}
          {userDidPay && productBought === 2 && (
            <>
              <Tag color="#1C4794">
                Taller <b>personal</b>
              </Tag>
              <h3>¡Gracias por tu pago!</h3>
              <p>
                Nos pondremos en contacto contigo en {userEmail} para agendar el
                día y la hora del taller.
              </p>
            </>
          )}
          {!userDidPay && <><h2>Hay un error</h2><p>Si tienes problemas con tu pago por favor escríbenos a support@deepfuture.institute</p></>}
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
    p{
      margin: 20px 0;
    }
    h3{
      font-size:3.6rem;
    }
  }
`;
