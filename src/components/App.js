import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import PageNotFound from './PageNotFound';
import Header from './common/Header';
import MealsPage from './Meals/MealsPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/meals" component={MealsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
