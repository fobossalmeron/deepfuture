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

  useEffect(() => {
    var ref = document.referrer;
    console.log(ref);
    if (!ref.includes("mercadopago")) {
      // window.location.replace("/");
      console.log("el ref no incluye mercadopago");
    }
    var _tier1 = Cookies.get("comprarTier1");
    if (_tier1 === undefined) {
      setUserDidPay(false);
    } else if (_tier1 === "true") {
      setUserDidPay(true);
    }
    var _email = Cookies.get("userEmail");
    if (_email === undefined) {
      setUserDidPay(false);
    } else {
      getUserEmail(_email);
    }

    // TODO meter al usuario a la lista correcta
  }, []);

//   useEffect(()=>(
// //descargar archivo automatico si es tier1
//   ), [])

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
          {userDidPay ? (
            <>
              <h2>Gracias por tu pago</h2>
              <p>Tu taller será enviado a {userEmail}</p>
            </>
          ) : (
            <h2>Parece que llegaste a esta página por error</h2>
          )}
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
