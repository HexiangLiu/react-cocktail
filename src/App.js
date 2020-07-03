import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// import all pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

// import main styled sheet
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/cocktail/:id" //URL PARAMETER
        >
          <SingleCocktail />
        </Route>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
