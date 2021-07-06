import './App.css';
import Footer from "./components/Footer/Footer";
import Rollback from "./components/Rollback/Rollback";
import History from "./components/History/History";
import UnSubmit from "./components/UnSubmit/UnSubmit";
import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const publicIp = require('public-ip');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    MySwal = withReactContent(Swal)

    componentDidMount() {
        this.MySwal.fire({title: "しばらくお待ちください..."})
        this.MySwal.showLoading();
        publicIp.v4().then((ip) => {
            this.MySwal.close();
            this.MySwal.fire(ip);
            this.setState({ready: true})
        })
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} render={() => <Rollback state={this.state}/>}/>
                        <Route exact path={"/history"} render={() => <History state={this.state}/>}/>
                        <Route exact path={"/unSubmit"} render={() => <UnSubmit state={this.state}/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer isSubmit={false} unSubmitNum={1} state={this.state}/>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
