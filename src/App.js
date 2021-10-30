import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Container className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Container>
          <Route />
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
