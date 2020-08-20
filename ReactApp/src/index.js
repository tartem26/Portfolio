import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import UserProfile from "./Views/UserProfile/UserProfile";
import NewsFeed from "./Views/NewsFeed/NewsFeed";
import MyDashboard from "./Views/MyDashboard/MyDashboard";
import Projects from "./Views/Projects/Projects";
import Checklists from "./Views/Checklists/Checklists";
import Events from "./Views/Events/Events";
import Messages from "./Views/Messages/Messages";
import Friends from "./Views/Friends/Friends";
import Help from "./Views/Help/Help";
import Settings from "./Views/Settings/Settings";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={UserProfile} />
        <Route path="/NewsFeed" component={NewsFeed} />
        <Route path="/MyDashboard" component={MyDashboard} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Checklists" component={Checklists} />
        <Route path="/Events" component={Events} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Friends" component={Friends} />
        <Route path="/Help" component={Help} />
        <Route path="/Settings" component={Settings} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
