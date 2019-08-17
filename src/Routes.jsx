//librerias
import React from "react";
import { Route, Switch } from "react-router-dom";
//componentes
import App from "./App";
import AppHome from "./Components/Home/AppHome";
import AppPageError from "./Components/Error/AppPageError";
import AppProducto from "./Components/Producto/AppProducto";

const AppRouters = () => (
  <App>
    <Switch>
      <Route exact path="/" component={AppHome} />
      <Route exact path="/categoria/:idCategoria" component={AppHome} />
      <Route path="/producto/:idProducto" component={AppProducto} />
      <Route component={AppPageError} />
    </Switch>
  </App>
);

export default AppRouters;
