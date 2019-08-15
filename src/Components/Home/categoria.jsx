import React from 'react';

const AppCategoria=({value,state,setSeleccionada})=>{
    const {imagenNormal, imagenSeleccionada,nombre} = value;
    const valor_img = state ? imagenSeleccionada : imagenNormal ;

    return<div 
        onClick={()=>setSeleccionada(value)} 
        style={{width:"137px",height:"80px",float:"left",textAlign:"center",padding:5,marginLeft:45}}>
        <img 
        src={valor_img} 
        alt={nombre} 
        width="70" 
        height="60" />
        <br />
        <label style={{fontSize:"12px",color:"blue"}} >{nombre}</label>
    </div>;
}
export default AppCategoria;