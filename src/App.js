import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div >
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>



    </div>
  );
}

export default App;
