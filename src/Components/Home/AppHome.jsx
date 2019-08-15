import React,{useState} from 'react';
import AppCategorias from './categorias';

const AppHome =()=>{
    const [catagoria,setCategoria] =useState({});

    const AsignarCategoria = seleccion =>{
        console.log("Categoria ",seleccion);
        setCategoria(seleccion);
    }

    return <div className="row">
        <AppCategorias setCategoria={AsignarCategoria} />
    </div>
}

export default AppHome;