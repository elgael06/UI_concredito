import React from 'react';

const AppProducto =({producto})=>{
    //variable
    const PrecioDecuento =()=> producto.precioDescuento ?<div style={{fontSize:12}}>
        <del>${producto.precioOriginal}</del> <b className="text-danger">${producto.precioDescuento}</b></div>
    :<i className="p-1" style={{fontSize:12}}>${producto.precioOriginal}</i> 

    return<div className="col-sm-3 p-3">
        <div className="card">
            {!producto.mostrarDescuento ||
            <i style={{width:60,borderTopLeftRadius:0,borderBottomLeftRadius:0,position:"absolute",marginTop:1}} className="p-2 badge badge-pill badge-danger">Oferta</i>}
            <img style={{minHeight:"240px",marginTop:3}} 
                className="card-img-top" 
                alt={producto.id} 
                src={producto.urlImagenMiniatura} />
            <h4 className="card-title p-1" style={{fontSize:13,height:"30px"}}>{producto.nombre.slice(0,30)}</h4>
            <p className="card-text text-gray p-2" style={{fontSize:10,height:"45px"}}>{producto.caracteristicas.slice(0,60)}</p>
            <hr />
            <div className="p-3">
            <PrecioDecuento/>
            <br />
            <b className="card-title p-1" style={{fontSize:21,height:"30px"}}>${producto.pagoQuincenal}</b>
               <span className="card-text" style={{fontSize:10,height:"30px"}}> a {producto.plazoDefecto} quincenas.</span>
            </div>
        </div>
    </div>
}

export default AppProducto;