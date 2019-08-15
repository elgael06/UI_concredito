import React,{useState} from 'react';
import ObtenerProductos from '../../Conections/productos';
import AppProducto from './Producto';

const AppProductos =({categoria})=>{
    const [productos,setProductos]=useState([]);
    const [peticion,setPeticion] = useState(false);

    const obtener_productos =lista_productos=>{

        console.log("productos=>",lista_productos);
        setProductos(lista_productos);
        setPeticion(true);
    }
    peticion || ObtenerProductos(categoria,obtener_productos,()=>console.log("Error..."))
    return<div className="row p-3">
        {productos.map(prod=><AppProducto producto={prod} key={prod.id} />)}
    </div>
}

export default AppProductos;