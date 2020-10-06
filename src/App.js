import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './components/login';
import home from './components/home';
import PrivateRouter from './helpers/private';
import Stores from './components/stores';
import CreateStore from './components/createStore';
import Loyalty from './components/loyalty';
import CreateMember from './components/createMember';
import EarnPoint from './components/earnPoints';
import TransactionHistory from './components/transactionHistory';

function App() {
  return (
    <Router>
     
      <section className="container">
        <Route exact path="/" component={Login} />
        <PrivateRouter exact path="/home" component={home} />
        <PrivateRouter exact path="/store" component={Stores} />
        <PrivateRouter exact path="/create" component={CreateStore} />
        <PrivateRouter exact path="/loyalty" component={Loyalty} />
        <PrivateRouter exact path="/createMember" component={CreateMember} />
        <Route exact path="/earn/:id" component={EarnPoint} />
        <Route exact path="/history/:id" component={TransactionHistory} />
      </section>
      
    </Router>
  );
}

export default App;
