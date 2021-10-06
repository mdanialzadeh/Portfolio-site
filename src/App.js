import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import './NavBar';
import NavBar from "./NavBar";
import Home from "./Home"
import Skills from "./Skills"
import Work from "./Work"
import Contact from "./Contact"
import About from "./About"
import {  Element } from 'react-scroll'

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <NavBar/>

            <Element name="Home" className="element">
              <Home/>
            </Element>

            <Element name="About" className="element">
              <About/>
            </Element>
            
            <Element name="Skills" className="element">
            <Skills/>
            </Element>

            <Element name="Work" className="element">
             <Work/>
            </Element>

            <Element name="Contact" className="element">
             <Contact/>
            </Element>
            
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}


export default App;
