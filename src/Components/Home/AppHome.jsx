//librerias
import React,{useState} from 'react';
//componentes
import AppCategorias from './categorias';
import AppProductos from './Productos';

const AppHome =()=>{
    const [catagoria,setCategoria] =useState({});


    const AsignarCategoria = seleccion =>{
        console.log("Categoria ",seleccion);
        setCategoria(seleccion);
    }

    return <div className="row">
        <AppCategorias setCategoria={AsignarCategoria} />
        <AppProductos categoria={catagoria.id} />
    </div>
}

export default AppHome;