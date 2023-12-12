import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import type {AppProps} from "next/app";

export default function App({ Component, pageProps} : AppProps) {
    const GlobalStyle = createGlobalStyle`
        body {
            margin : 0;
            padding : 0%;
            background-color:pink;
            width : 100vw;
        }
    `
    return(
        <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </Fragment>
    )
}