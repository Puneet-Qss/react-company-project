import React from "react";

import Home from "./components/Home/Home";
import MyComponent from "./components/MyComponent";
import "./index.css";
import Header from "../src/components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Header />

      <Home />
      <br />
      <MyComponent />
      <br />
      <Footer />
    </>
  );
}

export default App;
