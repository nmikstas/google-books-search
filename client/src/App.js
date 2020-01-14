import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App()
{
    return (
        <div id="page-body">
            <div className="container">
                
                <Router>
                    <div>
                        <Nav />
                        <Switch> 
                            <Route exact path="/" component={Home} />
                            <Route exact path="/search" component={Search} />
                            <Route exact path="/saved" component={Saved} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
