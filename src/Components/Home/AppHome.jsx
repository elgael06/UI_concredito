//librerias
import React, { useState } from "react";
//componentes
import AppCategorias from "./categorias";
import AppProductos from "./Productos";
import ObtenerProductos from "../../Conections/productos";

const AppHome = ({ match }) => {
  //state
  const [catagoria, setCategoria] = useState({});
  const [productos, setProductos] = useState([]);
  let { idCategoria } = match.params;
  //funciones
  const AsignarCategoria = seleccion => {
    console.log("Categoria ", seleccion);
    setCategoria(seleccion);
  };
  const obtener_productos = lista_productos => {
    console.log("productos=>", lista_productos);
    setProductos(lista_productos);
  };
  ObtenerProductos(idCategoria || catagoria.id , obtener_productos, () =>
  console.log("Error...")
);
  console.log(idCategoria);
  return (
    <div className="row">
      <AppCategorias
        setCategoria={AsignarCategoria}
        idCategoria={idCategoria}
      />
      <AppProductos productos={productos}  />
    </div>
  );
};

export default AppHome;
