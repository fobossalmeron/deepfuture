import Head from "components/Head";
import SingleColumn from "components/shared/SingleColumn";

function Privacy(props) {
  return (
    <>
      <Head
        title={"Política de Privacidad | Deep Future Institute"}
        canonical={"https://deepfuture.institute/privacidad"}
        description={"Protegemos tus datos. Lee nuestra política de privacidad para conocer cómo usamos los datos que compartes con nosotros."}
        lang={props.lang}
      />
      <SingleColumn>
        <h1>
          Política de <b>privacidad</b>
        </h1>
        <h3>
          <b>¿Quiénes somos?</b>
        </h3>
        <p>
          Deep Future Institute, con domicilio en calle Insurgentes Sur
          1168-404, colonia Tlacoquemecatl del Valle, ciudad Ciudad de México,
          delegación Benito Juárez, c.p. 03100, CDMX, país México; y portal de
          internet deepfuture.institute, es el responsable del uso y protección
          de sus datos personales, y al respecto le informamos lo siguiente:
        </p>
        <h3>
          ¿Para qué fines utilizaremos sus <b>datos personales?</b>
        </h3>
        <p>
          Los datos personales que recabamos de usted, los utilizaremos para las
          siguientes finalidades que son necesarias para el servicio que
          solicita:
        </p>
        <ul>
          <li>Almacenar su información en una base de datos protegida</li>
          <li>Poner a su disposición ofertas y promociones</li>
          <li>Hacer tácticas de publicidad en línea</li>
          <li>Enviar recursos y herramientas</li>
        </ul>
        <p>
          De manera adicional, utilizaremos su información personal para las
          siguientes finalidades secundarias que no son necesarias para el
          servicio solicitado, pero que nos permiten y facilitan brindarle una
          mejor atención:
        </p>
        <ul>
          <li>Mercadotecnia o publicitaria</li>
          <li>Prospección comercial</li>
        </ul>
        <p>
          En caso de que no desee que sus datos personales se utilicen para
          estos fines secundarios, indíquelo a en un correo a
          privacidad@deepfuture.institute como aparece a continuación.
          <br />
          <br />
          No consiento que mis datos personales se utilicen para los siguientes
          fines:
        </p>
        <ul>
          <li>Almacenar su información en una base de datos protegida [  ]</li>
          <li>Poner a su disposición ofertas y promociones [  ]</li>
          <li>Hacer tácticas de publicidad en línea [  ]</li>
          <li>Enviar recursos y herramientas [  ]</li>
          <li>Mercadotecnia o publicitaria [  ]</li>
          <li>Prospección comercial [  ]</li>
        </ul>
        <p>
          La negativa para el uso de sus datos personales para estas finalidades
          no podrá ser un motivo para que le neguemos los servicios y productos
          que solicita o contrata con nosotros.
        </p>
        <h3>
          ¿<b>Dónde</b> puedo consultar el aviso de privacidad <b>integral?</b>
        </h3>
        <p>
          Para conocer mayor información sobre los términos y condiciones en que
          serán tratados sus datos personales, como los terceros con quienes
          compartimos su información personal y la forma en que podrá ejercer
          sus derechos ARCO, puede consultar el aviso de privacidad integral
          escribiendo a privacidad@deepfuture.institute
        </p>
      </SingleColumn>
    </>
  );
}

export default Privacy;
