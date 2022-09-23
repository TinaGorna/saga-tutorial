import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./pages/App";
import store from "./redux";
import {Route, Router} from "react-router";
import {Switch} from "react-router-dom"
import {createBrowserHistory} from "history";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const history = createBrowserHistory()
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/' exact>
                        <App/>
                    </Route>
                    <Route path='/blog' exact>
                        <Blog/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>
);
