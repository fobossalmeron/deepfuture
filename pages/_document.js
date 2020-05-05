import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, pathname }) {
    let lang = pathname.includes("/en") ? "en" : "es";
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, lang };
  }
  render() {
    return (
      <Html lang={this.props.lang} dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/assets/favicon/safari-pinned-tab.svg"
            color="#1740bf"
          />
          <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#1740bf" />
          <meta
            name="msapplication-config"
            content="/assets/favicon/browserconfig.xml"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#F4F4F4" />
          <meta name="geo.region" content="CDMX" />
          <meta name="geo.placename" content="Acueducto" />
          <meta
            name="keywords"
            content="design, studio, acueducto, cdmx, innovation, strategic design, experience design, product design, brand design, social impact, design strategy, technology"
          />
          <GlobalStyles />
          {this.props.styleTags}
        </Head>
        <body>
          <div id="revealer">
            <div id="bordered" />
            <h1 id="logo">dfi</h1>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
