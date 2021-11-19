import logo from "./Assets/wplogo.png";
import Login from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import Plants from "./Components/PlantList";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Welcome from "./Components/Home";
import AddaPlant from "./Components/AddaPlant";
import { Nav } from "./Components/StyledComponents";
import PlantList from "./Components/PlantList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav>
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            {/* will edit when logo created */}
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/create">Sign Up</Link>
            {/* <Link to='/logout'>Logout</Link> */}
            <Link to="/AddaPlant">Add a Plant</Link>
            <Link to="/plants">Plant List</Link>
          </div>
        </Nav>
      </header>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <SignUp />
        </Route>
        {/* <Route path='/logout'>
            <Logout/>
          </Route> */}
        <Route path="/plants">
          <PlantList />
        </Route>
        <Route path="/AddaPlant">
          <AddaPlant />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
