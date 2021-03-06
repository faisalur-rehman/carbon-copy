import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import Admin from "./components/Admin/Admin";
import Cart from "./components/Cart/Cart";
import SingleRentalHistory from "./components/Admin/SingleRentalHistory/SingleRentalHistory";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/history/:id">
            <SingleRentalHistory />
          </Route>
          <Route path="/cart" component={Cart} />

          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
