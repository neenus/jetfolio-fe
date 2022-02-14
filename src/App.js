import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container className="App">
        <Routes>
          <React.Fragment>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route />
          </React.Fragment>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
