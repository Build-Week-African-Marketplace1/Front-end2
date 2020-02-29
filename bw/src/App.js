import React, {useState} from 'react';
import './App.css';
import Login from './content/login'
import SignUp from './content/signup';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import PrivateRoute from './content/privateRoute';
import Bub from './content/Bub';

import MarketContext from './content/context';

function App() {

  const [login, setLogin] = useState([]);

  const userInfo = info => {
    const givenInfo = {
      infos: info
    }
    setLogin([
      ...login, givenInfo
    ])
  }

  console.log(login)



  return (
    <div className="App">
      <header className="App-header">

        <h1> African MarketPlace </h1>
          <Router>
            <div>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'> Sign Up</Link>
            </div>

            <MarketContext.Provider value={{userInfo}}>
              
            <Switch>
              <PrivateRoute path='/home' component={Bub} />
              <Route exact path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
            </Switch>

            </MarketContext.Provider>


          </Router>
          
      </header>
    </div>
  );
}

export default App;
