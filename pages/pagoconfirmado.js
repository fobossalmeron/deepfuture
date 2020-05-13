import { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Head from "components/Head";
import MainGrid from "components/shared/MainGrid";
import LandBg from "components/LandBg";
import Cookies from "js-cookie/dist/js.cookie";

function PagoConfirmado(props) {
  const [showPay, setShowPay] = useState(false);
  const [product, setProduct] = useState(null);
  const [userDidPay, setUserDidPay] = useState(false);
  const [userEmail, getUserEmail] = useState(null);
  const [productBought, setProductBought] = useState(null);

  useEffect(() => {
    var ref = document.referrer;
    console.log(ref);
    if (!ref.includes("mercadopago")) {
      window.location.replace("/");
      console.log("No viene de mercadopago");
    }
    // if (ref.includes("test")) {
    //   // window.location.replace("/");
    //   console.log("Viene del test");
    // }
    var _tier1 = Cookies.get("comprarTier1");
    var _tier2 = Cookies.get("adquirirTier2");
    if (_tier1 === undefined && _tier2 === undefined){
      window.location.replace("/");
      console.log("No hubo cookies");
    }
    if (_tier1 === "true") {
      console.log("Cookie dice compro tier 1", _tier1);
      setUserDidPay(true);
      setProductBought(1);
      Cookies.remove('comprarTier1')
    }
    if (_tier2 === "true") {
      console.log("Cookie dice compro tier 2", _tier2);
      setUserDidPay(true);
      setProductBought(2);
      Cookies.remove('adquirirTier2')
    }
    var _email = Cookies.get("userEmail");
    if (_email === undefined) {
      setUserDidPay(false);
    } else {
      getUserEmail(_email);
    }
  }, []);
  
  // TODO: descargar archivo automatico si es tier1
  //   useEffect(()=>(
  //   ), [])

  useEffect(() => {
    console.log(userDidPay, productBought);
    var _email = Cookies.get("userEmail");
    var attributes =
      productBought === 1 ? { COMPROTIER1: true } : { COMPROTIER2: true };

    if (userDidPay) {
      const call = async () => {
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
          }),
        };

        const response = await fetch(
          "https://api.sendinblue.com/v3/contacts",
          requestOptions
        );
        const data = await response;
        console.log(data);
      };
      call();
    }
  }, [userDidPay]);

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
              {console.log("product bought 1")}
              <h2>Gracias por tu pago</h2>
              <p>Tu taller será enviado a {userEmail}</p>
            </>
          )}
          {userDidPay && productBought === 2 && (
            <>
              {console.log("product bought 1")}
              <h2>Gracias por tu pago</h2>
              <p>
                Un representate se contactará contigo en {userEmail} para
                establecer la fecha y hora del taller
              </p>
            </>
          )}
          {!userDidPay && <h2>Parece que llegaste a esta página por error</h2>}
        </div>
      </Land>
    </>
  );
}

export default React.memo(PagoConfirmado);

const Land = styled(MainGrid)`
  min-height: 100vh;
  align-items: center;
  padding-top: 13%;
  pointer-events: none;
  #landtext {
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    h1 {
      max-width: 870px;
      grid-column: 2 / span 8;
      b {
        font-weight: 500;
      }
    }
    h2 {
      font-size: 2.55rem;
      line-height: 135%;
      max-width: 650px;
      margin-top: 0;
    }
  }
`;
