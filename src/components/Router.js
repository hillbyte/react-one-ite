import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import StorePicker2 from "./StorePicker2";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker2} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
