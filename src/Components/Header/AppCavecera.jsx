//librerias
import React from 'react';
import {Link} from 'react-router-dom';
//componentes
import BarraBuscar from './BarraBuscar';

const AppCavecera =()=>{
   return <nav style={{background:"#4857ce",zIndex:"999",padding:".5%",minHeight:"50px",display:"flex",color:"#FFF",fontSize:"20px",fontFamily:"Roboto,sans-serif", justifyContent:"center",alignItems:"center",top:0,position:"sticky"}}>
       <div className="row" style={{width:"100%",marginTop:"5px"}}>
        <Link  to="/"  className="col-sm-2" style={{padding:"5px",width:"157px",textAlign:"right",color:"#FFF"}}>
            <label>
                CrediTienda
            </label>        
        </Link>
        <BarraBuscar />
       </div>
    </nav>
}

export default AppCavecera;