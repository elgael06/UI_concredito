//libreras
import React, { useState } from "react";
//conexiones
import ObtenerCategoorias from "../../Conections/categorias";
//componentes
import AppCategoria from "./categoria";
//css
require('./style/estilos_categorias.css');

const AppCategorias = ({ setCategoria, idCategoria }) => {
  //estado
  const [categorias, setCategorias] = useState([]);
  //funciones
  const asignar_catagorias = lista_categorias => {
    let id = idCategoria
      ? lista_categorias.findIndex(e => e.id === idCategoria)
      : 0;
    lista_categorias.length === 0 || setCategoria(lista_categorias[id]);
    setCategorias(lista_categorias);
  };
  //Obtener Categorias
  categorias.length > 0 ||
    ObtenerCategoorias(asignar_catagorias, () =>
      console.log("Error al cargar Categirias")
    );

  return (
    <nav className="categorias ">
      {categorias.map(cat => (
        <AppCategoria
          value={cat}
          state={cat.id === idCategoria}
          setSeleccionada={()=>setCategoria(cat)}
          key={cat.nombre}
        />
      ))}
    </nav>
  );
};

export default AppCategorias;
