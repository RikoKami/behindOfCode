import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { UseEffect } from "../pages/UseEffect";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/useEffect" component={UseEffect} />
    </Switch>
  );
};
