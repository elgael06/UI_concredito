import React from 'react';

const BarraBuscar =()=>{
    return <div className="col-sm-8 input-group mb-3">
            <input type="text" className="form-control" placeholder="¿Qué estás buscando?" />
            <div className="input-group-append">
                <i className="input-group-text fa fa-search text-white bg-orange"  style={{background:"orange",border:"none"}} ></i>
            </div>
    </div>
}

export default BarraBuscar;