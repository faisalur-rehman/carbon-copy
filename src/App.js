import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
