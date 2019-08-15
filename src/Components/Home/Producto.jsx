import React from 'react';

const AppProducto =({producto})=>{

    return<div className="col-sm-3 p-1">
        <div className="card">
            <img className="card-img-top" alt={producto.id} src={producto.urlImagenMiniatura} />
            <h4 className="card-title p-2" style={{fontSize:13}}>{producto.nombre.slice(0,30)}</h4>
            <p className="card-text text-gray p-2" style={{fontSize:10}}>{producto.caracteristicas.slice(0,60)}</p>
        </div>
    </div>
}

export default AppProducto;