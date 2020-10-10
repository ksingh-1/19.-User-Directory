import React, { Component } from "react";
import Main from "./components/Main";

import { BrowserRouter as Router, Route } from "react-router-dom";
//returning your main will store the other components and api call 
function App() {
  return (<Router>
    <div>
      <Route exact path="/" component={Main} />
    </div>

  </Router>)
}
export default App;