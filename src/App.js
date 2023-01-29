import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Nav
import Nav from "./components/Nav";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/ourwork" exact element={<OurWork />} />
        <Route path="/contactus" exact element={<ContactUs />} />
        <Route path="/ourwork/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
