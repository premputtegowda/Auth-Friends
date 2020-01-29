import React from 'react';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Login</Link>
      <Link to="/friends">Friends</Link>
     
      

      <Switch>
        <PrivateRoute path="/friends" component={Friends}/>
        <Route path="/" component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;
