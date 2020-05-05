import Head from "../components/Head";
import { useEffect } from "react";

export default function Error(props) {
  let t = props.locale.error_page;
  useEffect(() => {
    props.setTitle(
      t.headerTitle + " " + (props.statusCode ? props.statusCode : "Client")
    );
  }, []);
  return (
    <>
      <Head
        title={`Acueducto | ${props.statusCode ? props.statusCode : "404"}`}
        lang={props.lang}
      />
      <p>404 ERROR</p>
      </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
