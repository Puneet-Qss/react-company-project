import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import MyComponent from "./components/MyComponent";
import './index.css';


function App() {
  return (
    <>
      <Header />
      <Home />
     
        <MyComponent />
    
      <Footer />
    </>
  );
}

export default App;
