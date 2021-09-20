import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import { UseEffect } from "./Pages/UseEffect";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/useEffect" component={UseEffect} />
      </Switch>
    </BrowserRouter>
  );
};
