import './App.css';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} render={() => <p>test</p>} />
                <Route component={NotFound}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
