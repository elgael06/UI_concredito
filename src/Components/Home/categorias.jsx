//libreras
import React,{useState} from 'react';
//conexiones
import ObtenerCategoorias from '../../Conections/categorias';
//componentes
import AppCategoria from './categoria';

const AppCategorias = ({setCategoria}) =>{
    //estado
    const [categorias,setCategorias] =useState([]);
    const [seleccionada,setSeleccionada] =useState({});
    //funciones
    const asignar_catagoria= lista_categorias =>{
        lista_categorias.length === 0 || setSeleccionada(lista_categorias[0])
        setCategorias(lista_categorias);
        setCategoria(lista_categorias[0]);
    }
    //Obtener Categorias
    categorias.length>0 || ObtenerCategoorias(asignar_catagoria,()=>console.log("Error al cargar Categirias"))

    return <div className="col-sm-12" style={{overflowX:"scroll",scrollbarWidth:0,height:"130px",display:"flex"}}> 
    
        <div>
            <i className="fa fa-angle-left" style={{zIndex:"9999",position:"absolute",fontSize:"40px"}} ></i>
        </div>
        {categorias.map(cat=><AppCategoria 
            value={cat} 
            state={cat.nombre=== seleccionada.nombre} 
            setSeleccionada={setSeleccionada}
            key={cat.nombre} />)}
        <div>
            <i className="fa fa-angle-right" style={{zIndex:"9999",position:"absolute",fontSize:"40px"}} ></i>
        </div>
    </div>
}

export default AppCategorias;