import Head from "components/Head";
import SingleColumn from "components/shared/SingleColumn";

function Terms(props) {
  return (
    <>
      <Head
        title={"Términos y Condiciones | Deep Future Institute"}
        canonical={"https://deepfuture.institute/terminos"}
        description={
          "Al comprar cualquier asset digital aceptas estos términos y condiciones."
        }
        lang={props.lang}
      />
      <SingleColumn>
        <h1>
          <b>Términos y condiciones</b> para productos digitales
        </h1>
        <h2>
          Efectivo a partir del <b>18 de mayo de 2020</b>
        </h2>
        <p>
          Estos Términos y Condiciones Generales (TCG) se aplican a todos los
          archivos electrónicos suministrados por Deep Future Institute (en lo
          sucesivo, DFI) a cambio del pago o de forma gratuita que se utilizan
          exclusivamente en el curso de la transmisión de datos a través del
          sitio web de DFI. Estos Términos y condiciones generales se aplican
          solo a clientes individuales.
        </p>
        <h3>
          1. <b>Conclusión</b> del contrato / acceso a productos digitales
        </h3>
        <p>
          1.1 El cliente celebra el contrato seleccionando un producto digital
          en el sitio web y, después del pago exitoso, recibe un hipervínculo
          por correo electrónico con la descarga para el producto digital
          seleccionado. Al concluir el contrato, se le otorga al cliente un
          derecho de uso no transferible, no exclusivo e ilimitado a los
          productos digitales relevantes para el contrato, que se limita al uso
          descrito en particular en la sección 5. Todos los derechos de uso que
          no mencionado explícitamente permanecerá con DFI como titular de todos
          los derechos de autor y propiedad.
        </p>
        <p>
          1.2 El acceso del cliente a los productos digitales se implementa
          mediante descargas en un formato establecido, p. PDF para documentos
          de texto. El cliente está obligado a mantener la confidencialidad de
          su código de descarga y protegerlo del mal uso por parte de terceros.
          El cliente informará a DFI sin demora en caso de pérdida del
          hipervínculo de descarga o sospecha de mal uso de dichos datos.
          Además, DFI tiene derecho a bloquear el acceso a productos digitales
          en caso de mal uso. El cliente es responsable de cualquier mal uso del
          que sea responsable.
        </p>
        <h3>
          2. Condiciones de <b>pago</b>
        </h3>
        <p>
          2.1 Los productos digitales solo se pueden pagar a través del sistema
          de pago Mercado Pago®. Las disposiciones de la sección 4 de estos TCG
          se aplican a los consumidores.
        </p>
        <h3>
          3. Derecho de <b>revocación</b>
        </h3>
        <p>
          3.1. Los clientes que son consumidores, a menos que se aplique una
          excepción relacionada a la ley, tienen derecho a cancelar un contrato
          celebrado con DFI mediante el uso exclusivo de uno o más medios de
          comunicación (por ejemplo, teléfono, carta, fax, correo electrónico)
          dentro de dos días hábiles, sin dar razones.
        </p>
        <p>
          3.2. El período de cancelación comienza en la fecha de conclusión del
          contrato en caso de que no se suministren contenidos digitales en un
          soporte de datos físicos.
        </p>
        <p>
          3.3. Para ejercer su derecho de revocación, debe informarnos sobre el
          ejercicio de su derecho mediante una declaración clara (por ejemplo,
          una carta enviada por correo postal o correo electrónico) de su
          decisión de cancelar este contrato: Av. Insurgentes Sur 1168-404,
          Tlacoquemecatl del Valle, Benito Juárez, 03100 Ciudad de México, CDMX.
          Correo electrónico: contacto@deepfuture.institute
        </p>
        <p>
          3.4 Para cumplir con el plazo de cancelación, es suficiente enviar un
          mensaje sobre el ejercicio del derecho de revocación antes de que
          expire el período de cancelación.
        </p>
        <p>
          3.5 Si ejerce su derecho de revocación, le devolveremos todos los
          pagos recibidos de usted sin demora y, a más tardar, dentro de los
          catorce días hábiles de la fecha en que recibimos la notificación de
          su retiro del contrato. Le devolveremos los fondos utilizando el mismo
          método que utilizó para la transacción original, a menos que se
          acuerde explícitamente lo contrario con usted; nunca se le cobrará
          ninguna tarifa por este reembolso.
        </p>
        <p>
          3.7. Pérdida del derecho de revocación. El derecho de revocación
          caduca antes de tiempo en el caso de contratos para el suministro de
          contenidos digitales no almacenados en un soporte de datos físicos,
          como libros electrónicos, por ejemplo, si ha otorgado explícitamente
          el consentimiento para que el contrato comience antes del vencimiento
          de la cancelación período y usted sabía que había renunciado a su
          derecho de revocación al dar dicho consentimiento.
          <br />
          <br />
          Como resultado, en el caso de los productos digitales, no existe el
          derecho de revocación para la entrega de contenidos digitales no
          almacenados en un soporte de datos físicos, como libros electrónicos.
        </p>
        <h3>
          4. Derechos de <b>autor</b> / derechos de <b>uso</b>
        </h3>
        <p>
          5.1 El cliente no adquiere ninguna propiedad. Todos los derechos de
          autor, derechos de uso y otros derechos de propiedad de productos
          digitales permanecen con Deep Future Institute.
        </p>
        <p>
          5.2 El cliente adquiere el derecho de usar los productos digitales que
          se le proporcionan en hasta 5 dispositivos finales adecuados para este
          propósito.
        </p>
        <p>
          5.3 El cliente se compromete a utilizar los productos digitales que se
          le proporcionan únicamente para sus propios fines y no permitir que
          terceros accedan por separado a la producción digital
        </p>
      </SingleColumn>
    </>
  );
}

export default Terms;
