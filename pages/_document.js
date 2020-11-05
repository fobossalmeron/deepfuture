import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, pathname }) {
    let lang = pathname.includes("/en") ? "en" : "es";
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
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
            sizes="194x194"
            href="/assets/favicon/favicon-194x194.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/favicon/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/assets/favicon/safari-pinned-tab.svg"
            color="#1d1d1b"
          />
          <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#1d1d1b" />
          <meta
            name="msapplication-config"
            content="/assets/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#1d1d1b" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="geo.region" content="CDMX" />
          <meta name="geo.placename" content="Deep Future Institute" />
          <meta
            name="keywords"
            content="prospectiva, futuro, análisis de futuro, talleres, capacitación, consultoría"
          />
          <GlobalStyles />
          {this.props.styleTags}
        </Head>
        <body>
          <div id="revealer">
            <div id="bordered" />
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 238 153"
            >
              <path
                fill="#F4F4F4"
                d="M238 72.5S214.2 152 119 152 0 72.5 0 72.5 23.8 1.1 119 1.1s119 71.4 119 71.4z"
              />
              <circle cx="119" cy="72.5" r="39.7" fill="#1D1D1B" />
            </svg>
          </div>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Html>
    );
  }
}
