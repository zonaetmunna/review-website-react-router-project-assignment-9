import 'bootstrap/dist/css/bootstrap.min.css';

import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import Blogs from './Componants/Blogs/Blogs';
import Details from './Componants/Details/Details';
import Footer from './Componants/Footer/Footer';

import Home from './Componants/Home/Home';
import Notpound from './Componants/Notppound/Notpound';
import Services from './Componants/Services/Services';
import Header from './Componants/Header/Header';


// create context
export const courseContext = createContext()

function App() {
  const ceo = "zonaet hossain munna";
  return (

    <div>

      <courseContext.Provider value={ceo}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Services></Services>
            </Route>
            <Route path="/course/:idCourse">
              <Details></Details>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Notpound></Notpound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </courseContext.Provider>

    </div>
  );
}

export default App;
