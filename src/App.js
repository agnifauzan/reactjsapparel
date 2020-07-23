import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../src/pages/landingPage";
import DetailPage from "../src/pages/detailPage";

import "../src/assets/fontawesome/css/all.css";
import "../src/assets/css/style.css";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
