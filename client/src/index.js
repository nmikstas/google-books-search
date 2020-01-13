import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";

ReactDOM.render([<Header title="React Google Books Search"  key="1" />, <App  key="2" />, <Footer  key="3" />], document.getElementById("root"));
