import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Menu extends React.Component {


    render() {
        return (<div>
            <Router>
                <Switch>

                    <Route path="/" exact>
                        Menu Principal
                    </Route>
                    <Route path="/menu1">
                        Menu 1
                    </Route>

                    <Route path="/menu2">
                        Menu 2
                    </Route>

                    <Route path="/menu3">
                        Menu 3
                    </Route>

                </Switch>
            </Router>
        </div>);
    }
}