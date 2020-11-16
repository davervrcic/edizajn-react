import React, { Component } from "react";
import "./App.css";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect

} from 'react-router-dom';

// Pages

import MainPage from './pages';
import AddProject from "./pages/addProject";
import NotFoundPage from "./pages/404";
import Work from "./pages/work";


class App extends Component {
  

  render () {    

  return (      
  
    <Router>

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/addproject" component={AddProject} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404"/>
      </Switch>

     </Router>
    
  );

}
}
  
export default App;
