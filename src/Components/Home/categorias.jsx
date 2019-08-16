//libreras
import React, { useState } from "react";
//conexiones
import ObtenerCategoorias from "../../Conections/categorias";
//componentes
import AppCategoria from "./categoria";

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
    <nav
      className="row"
      style={{
        height: "100px",
        background:"#FFF",
        position:"absolute",
        left:0,
        right:0
      }}
    >
      <div className="col-sm-1">
        <i
          className="fa fa-angle-left"
          style={{ zIndex: "9999", position: "absolute", fontSize: "40px" }}
        />
      </div>
      <div className="col-sm-10" style={{
        overflowX:"auto",
        height:100,

        }}>
      {categorias.map(cat => (
        <AppCategoria
          value={cat}
          state={cat.id === idCategoria}
          setSeleccionada={()=>setCategoria(cat)}
          key={cat.nombre}
        />
      ))}
      </div>
      <div className="col-sm-1">
        <i
          className="fa fa-angle-right"
          style={{ zIndex: "9999", position: "absolute", fontSize: "40px" }}
        />
      </div>
    </nav>
  );
};

export default AppCategorias;
