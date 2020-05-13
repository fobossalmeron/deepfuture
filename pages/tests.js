import Head from "components/Head";

function Tests(props) {
  return (
    <>
      <Head
        title={"Deep Future Institute"}
        canonical={"https://deepfuture.institute/tests"}
        lang={props.lang}
      />
        <div id="landtext">
          <br/><br/><br/><br/>
          <h1>TESTS</h1>
          <a href="/pagoconfirmado" rel="noreferrer">ir a pago confirmado NO REFERRER</a><br/>
          <a href="/pagoconfirmado">ir a pago confirmado</a>
        </div>
    </>
  );
}

export default React.memo(Tests);
