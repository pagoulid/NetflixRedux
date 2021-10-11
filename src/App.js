import React from 'react';

import Homepage from "./Homepage";
import Form from "./Form/Form";
import SignForm from "./SignForm/Form";

import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap testing

import {  Switch, Route, useLocation} from "react-router-dom";
//import { Counter } from './features/counter/Counter';
import './App.css';
/**combine route with link at sign */
 const App =()=> {
    const Do =(func)=>{
      return func();
    }

    const path =Do(useLocation);/*uselocation is a hook for the path link*/ 

    return (
      
        <div className="App">
          <Switch location = {path} key = {path.pathname}>
            <Route exact path ='/'>

            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
              integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
              crossorigin="anonymous"/>
              <Homepage/>
            </Route>
            <Route  path ='/Log'>
              <Form/>
            </Route>
            <Route  path ='/Register'>
              <SignForm/>
            </Route>
          </Switch>
         
        </div>
      
    );
  }

export default App;
