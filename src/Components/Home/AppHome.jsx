//librerias
import React, { useState } from "react";
import { Redirect } from 'react-router';
//componentes
import AppCategorias from "./categorias";
import AppProductos from "./Productos";
import AppSpinner from "../Global/Spinner";
//conexion 
import ObtenerProductos from "../../Conections/productos";
import AppAnuncio from "./Anuncio";

const AppHome = ({ match }) => {
  //state
  const [productos, setProductos] = useState([]);
  const [spinner,setSpiner] = useState(false);
  //variables
  let { idCategoria } = match.params;
  //funciones
  const AsignarCategoria = seleccion => {
    console.log("Categoria ", seleccion);
    setProductos([])
    setSpiner(false)
    ObtenerProductos(seleccion.id, obtener_productos, () =>console.log("Error..."));
  }
  const obtener_productos =lista=>{
    setProductos(lista)
    setSpiner(true);
  }
  console.log(idCategoria)
  return (
    <div className="row">
      {idCategoria !==undefined ||  <Redirect to={`/categoria/destacados`}/>}
      <AppCategorias
        setCategoria={AsignarCategoria}
        idCategoria={idCategoria}
      />
      {idCategoria !=="destacados" ||<AppAnuncio />}
      {
      spinner ?
      <AppProductos productos={productos}  />
        :<AppSpinner />
    }
    </div>
  );
};

export default AppHome;
