import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/index';
import Recipe from '../pages/Recipe/index';
import Favorites from '../pages/Favorites/index';
import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/App.scss';

const App = () => (
  <Router>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route path="/recipes/:id" component={Recipe} />
    </Switch>
    <Footer />
  </div>
  </Router>
)

export default App;
