import React from "react";
import { render } from "react-dom";
import App from "./App";

declare const module: any;

const renderApp = () => render(<App />, document.querySelector(".app"));

renderApp();

module.hot.accept("./App", renderApp);
