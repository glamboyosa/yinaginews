import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import homeContainer from "../homeComponent/homeContainer";
import usNews from "../USNewsComponent/usNewsComponent";
import UKNews from "../UKNewsComponent/ukNewsComponent";
import sportsComponent from "../sportsComponent/sportsComponent";
import entertainmentComponent from "../entertainmentComponent/entertainmentComponent";
const route = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={homeContainer} />
        <Route exact path="/sports" component={sportsComponent} />
        <Route exact path="/uk-news" component={UKNews} />
        <Route exact path="/us-news" component={usNews} />
        <Route path="/entertainment" component={entertainmentComponent} />
      </Switch>
    </Router>
  );
};
export default route;
