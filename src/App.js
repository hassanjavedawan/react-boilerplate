import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Base from "./components/layout/Base";
import PageNotFound from "./components/element/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Base>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Base>
      </Router>
    </>
  );
}

export default App;
