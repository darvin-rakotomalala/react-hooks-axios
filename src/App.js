import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import GetUserDetail1 from "./components/methodGet/GetUserDetail1";
import GetUserDetail2 from "./components/methodGet/GetUserDetail2";
import CreateUserPost from "./components/methodPost/CreateUserPost";
import DeleteUser from "./components/methodDelete/DeleteUser";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/method-get-1">1-1. Exemple méthode GET</Link>
              </li>
              <li>
                <Link to="/method-get-2">
                  1-2. Exemple méthode GET Async/Await
                </Link>
              </li>
              <li>
                <Link to="/method-post">
                  2. Exemple méthode POST Async/Await
                </Link>
              </li>
              <li>
                <Link to="/method-delete">
                  3. Exemple méthode DELETE Async/Await
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/method-get-1" component={GetUserDetail1} />
            <Route path="/method-get-2" component={GetUserDetail2} />
            <Route path="/method-post" component={CreateUserPost} />
            <Route path="/method-delete" component={DeleteUser} />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
