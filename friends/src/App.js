import React, {useState} from 'react';
import Login from './components/Login';
import Friends from './components/Friends';
import Friend from './components/Friend'
import PrivateRoute from './components/PrivateRoute';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState()


 
  return (
    <div className="App">

      
       
      <nav>
      <Link to="/">Login</Link>/
        <Link to="/friends">Friends</Link>
        {/* <Link to="/"><span onClick={()=>localStorage.removeItem('token')}>Logout</span></Link> */}
        
      </nav> 
      
      
     
      

      <Switch>
        {/* <PrivateRoute path="/friends/:id" component= {Friend} /> */}
        <PrivateRoute path="/friends" component={Friends}/>
        <Route path="/" component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;
