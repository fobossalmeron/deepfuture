import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Head from "components/Head";
import LandBg from "components/LandBg";
import Cookies from "js-cookie/dist/js.cookie";
import { Button } from "components/shared/Forms";
import downloadWorkshop from "utils/downloadWorkshop";
import Tag from "components/shared/Tag";
import SingleAction from "components/shared/SingleAction";
import LinkedInTag from 'react-linkedin-insight';

const production = true;

function PagoConfirmado(props) {
  const [userDidPay, setUserDidPay] = useState(false);
  const [userEmail, getUserEmail] = useState(null);
  const [productBought, setProductBought] = useState(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    var ref = document.referrer;
    console.log(ref);
    if (!ref.includes("mercadopago")) {
      if (production) {
        window.location.replace("/");
      }
    }
    var _tier1 = Cookies.get("comprarTier1");
    var _tier2 = Cookies.get("adquirirTier2");
    if (_tier1 === undefined && _tier2 === undefined) {
      if (production) {
        window.location.replace("/");
      }
    }
    if (_tier1 === "true") {
      // console.log("Cookie dice compro tier 1", _tier1);
      setUserDidPay(true);
      setProductBought(1);
      LinkedInTag.track(2186434); //compra tier 1
      if (production) {
        Cookies.remove("comprarTier1");
      }
    }
    if (_tier2 === "true") {
      // console.log("Cookie dice compro tier 2", _tier2);
      setUserDidPay(true);
      setProductBought(2);
      if (production) {
        Cookies.remove("adquirirTier2");
      }
    }
    var _email = Cookies.get("userEmail");
    if (_email === undefined) {
      setUserDidPay(false);
    } else {
      getUserEmail(_email);
    }
  }, []);

  useEffect(() => {
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
  };

  return (
    <>
      <Head
        title={"Deep Future Institute | Pago confirmado"}
        canonical={"https://deepfuture.institute/pagoconfirmado"}
        lang={props.lang}
      />
      <LandBg />
      <SingleAction>
          {userDidPay && productBought === 1 && (
            <>
              <Tag color={theme.colors.tier1}>
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
              <Tag color={theme.colors.tier2}>
                Taller <b>personal</b>
              </Tag>
              <h3>¡Gracias por tu pago!</h3>
              <p>
                Nos pondremos en contacto contigo en {userEmail} para agendar el
                día y la hora del taller.
              </p>
            </>
          )}
          {!userDidPay && (
            <>
              <h3>Hay un error</h3>
              <p>
                Si tienes problemas con tu pago por favor escríbenos a
                support@deepfuture.institute
              </p>
            </>
          )}
      </SingleAction>
    </>
  );
}

export default React.memo(PagoConfirmado);