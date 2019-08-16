//libreria
import React,{useState} from 'react';
//conexion
import ObtenerAnuncios from '../../Conections/anuncios';

const AppAnuncio=()=>{
    const [anuncio,setAnuncio] = useState({});
   anuncio.id || ObtenerAnuncios(setAnuncio,()=>console.log("Error..."))
return <div className="row">
        <a href={anuncio.link}>
            <img style={{width:"100%",position:"static",marginTop:102}} src={anuncio.imagenComputadora} alt="Anuncio." /> 
        </a>
    </div>;
}


export default AppAnuncio;