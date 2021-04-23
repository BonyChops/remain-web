import './App.css';
import Footer from "./components/Footer/Footer";
import Rollback from "./components/Rollback/Roleback";
import History from "./components/History/History";
import UnSubmit from "./components/UnSubmit/UnSubmit";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={() => <Rollback />} />
          <Route exact path={"/history"} render={() => <History />} />
          <Route exact path={"/unSubmit"} render={() => <UnSubmit />} />
          <Route component={NotFound} />
        </Switch>
        <Footer isSubmit={false} unSubmitNum={6} />
      </BrowserRouter>
    </div>
  );
}

export default App;
