import React from "react";
import AppProducto from "./Producto";

const AppProductos = ({ productos }) => {


     
  return (
    <div className="row p-3">
      {productos.map(prod => (
        <AppProducto producto={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default AppProductos;
