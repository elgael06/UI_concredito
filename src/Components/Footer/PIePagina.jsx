//libreria
import React from 'react';
//estilos
require('./styles/main.css');

const AppPiePagina =()=>{

return (<div className="container ">
        <div className="row">
        <PieTitulo />
        <PieRedes/>
        <PieCategorias/>
        <PieCondisef/>
        </div>
        <hr/>
        <div className="rootContainer">
            <div className="p-3">
                Todos los derechos reservados ConCrédito®
            </div>
            <div className="p-3">
                Términos y condiciones
            </div>
        </div>
</div>);
}

const PieTitulo=()=><div className="contenedor col-sm-12">
        <b style={{marginLeft:"30px"}}>CrediTienda</b>
    </div>;

const PieRedes=()=><div className="redes_app col-sm-4">
     <div  className="p-2">
        <b>Descárgala en Google Play</b>
     </div>
   <br/>
   <div  className="p-1">
   <a href="https://play.google.com/store/apps/details?id=com.concredito.creditienda&amp;hl=es_MX">
        <img src="http://creditienda.mx/app/core/img/download.jpg" width="165" height="50" alt="play"/>
        <img src="http://creditienda.mx/app/core/img/group_8.svg" height="50" width="50" alt="creditienda"/>
    </a>
    </div>
    <div class="follow p-1">
        <a href="https://www.facebook.com/creditienda/" style={{color:"#000"}}> 
                Síguenos en <img class="follow-img" src="http://creditienda.mx/app/core/img/facebook.svg"  height="13" alt="facebook"/>
            </a>
    </div>
</div>;

const PieCategorias=()=><div className="redes_app col-sm-4">
   <b>Categorías en CrediTienda</b>
   <br/>

</div>;

const PieCondisef=()=><div className="pie col-sm-4">
  <a href="https://www.gob.mx/condusef">
                <img src="http://creditienda.mx/app/core/img/buro.svg" alt="" height="42" />
            </a>
            <a href="www.burodecredito.com.mx/‎">
                <img src="http://creditienda.mx/app/core/img/buro_banner.jpg" alt="" height="42" />
            </a>
</div>;
export default AppPiePagina;