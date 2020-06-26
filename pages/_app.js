import "antd/dist/antd.css";
import PropTypes from "prop-types";
import React from "react";
import Head from "next/head";

// appjs 는 pages들의 공통 부분

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>
                    NodeBird
            </title>
            </Head>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
export default App;