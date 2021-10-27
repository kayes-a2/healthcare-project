//import react components & route & external react node pakage

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Buying from './Components/Buying/Buying/Buying';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Service from './Components/Service/Service';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (

    //router path
    <div >
      <AuthProvider>
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

            <PrivateRoute path="/buying/:medicineId">
              <Buying></Buying>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

//component export
export default App;
