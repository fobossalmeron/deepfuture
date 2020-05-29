import { withTheme } from "styled-components";
import Head from "components/Head";
import BackgroundCovid from "components/Backgrounds/BackgroundCovid";
import Tag from "components/shared/Tag";
import SingleAction from "components/shared/SingleAction";

function Error404(props) {
  return (
    <>
      <Head
        title={"404 | Deep Future Institute"}
        canonical={"https://deepfuture.institute/404"}
        lang={props.lang}
      />
      <BackgroundCovid />
      <SingleAction>
        <Tag color={props.theme.colors.error}>
          Error <b>404</b>
        </Tag>
        <p>Lo sentimos, el URL que ingresaste no existe.</p>
      </SingleAction>
    </>
  );
}

export default withTheme(Error404);
