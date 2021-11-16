import logo from './logo.svg';
import Login from './Components/LoginPage'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" /> 
            {/* will edit when logo created */}
          </div>
          <div className='links'>
            {/* Link to='' TBD */}
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/create'>Sign Up</Link>
            {/* <Link to='/logout'>Logout</Link> */}
            <Link to='/plants'>Plant List</Link>
          </div>
        </nav>
      </header>
      <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            
          </Route>
          {/* <Route path='/logout'>
            <Logout/>
          </Route> */}
          <Route path='/plants'>
            
          </Route>
          <Route path='/'>
         
          </Route>
        </Switch>
    </div>
  );
}

export default App;
