import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main'
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route patch="/details/:id" component={ Details } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
