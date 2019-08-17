//librerias
import React,{useState} from "react";
import { Link } from "react-router-dom";
//componentes
import ObtenerProductoID from "../../Conections/productoId";

const AppProducto=({match})=>{
  const [producto,setProducto] = useState({});
  const [status,setStatus] = useState(false);
  //variables
  let { idProducto } = match.params;
  //funciones
  const consultar= async()=>{
    setStatus(true);
    let product = await ObtenerProductoID(idProducto);
    if(product!=null)
      setProducto(product);
  }
  status || consultar();
  console.log("idProducto=>",idProducto);
  console.log("producto=>",producto);
    return(<div className="row" style={{minHeight:400}}>
      <Url producto={producto}/>
        Producto
    </div>);
}

const Url =({producto})=>{
const {nombreCategoria, categoriaId, nombre} = producto;
  return(<div className="col-sm-12" style={{height:"30px",marginTop:"10px"}}>
    <u>
      <Link to="/" style={{color:"#000"}} >
        <i className="fa fa-arrow-left"> </i> inicio 
      </Link>
    </u>
    {" /"}
    <u>
      <Link to={`/categoria/${categoriaId}`} style={{color:"#000"}} > 
        { " "+nombreCategoria || " "}
      </Link>
    </u>
    {" /"}
    <span>
      {" " +nombre || " "}
    </span>
  </div>);
}

export default AppProducto;