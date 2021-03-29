import App from "next/app";
import { Global } from "@emotion/react";
import type { AppProps, AppContext } from "next/app";
import { Fragment } from "react";
import GlobalStyle from "../Styles/GlobalStyle";
import { RecoilRoot } from "recoil";

const MyApp = ({Component , pageProps } : AppProps) => {
    return (
        <Fragment>
            <RecoilRoot>
                <Global styles={GlobalStyle} />
                <Component {...pageProps} />
            </RecoilRoot>
        </Fragment>
    )
}

MyApp.getInitialProps = async ( appContext: AppContext ) => {
    const appProps = await App.getInitialProps(appContext);

    return {...appProps};
}

export default MyApp;