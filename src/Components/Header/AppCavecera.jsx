//librerias
import React from 'react';
import {Link} from 'react-router-dom';
//componentes
import BarraBuscar from './BarraBuscar';

const AppCavecera =()=>{
   return <nav style={{background:"#4857ce",zIndex:"999",padding:".5%",height:"54px",display:"block",color:"#FFF",fontSize:"20px",fontFamily:"Roboto,sans-serif", justifyContent:"center",alignItems:"center"}}>
       <div className="row">
        <Link  to="/"  className="col-sm-2 p-12" style={{padding:"5px",float:"left",width:"157px",textAlign:"right",color:"#FFF"}}>
            <label>
                CrediTienda
            </label>        
        </Link>
        <BarraBuscar />
       </div>
    </nav>
}

export default AppCavecera;