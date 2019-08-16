import React from 'react';
//css
require("./rotate.css");

const AppSpinner=({heigth,color})=>{
    return<div style={{
        height:heigth|| 150,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        position:"fixed",
        top:"50%",
        left:0,
        right:0
    }}>
        <i className="fa fa-circle-o-notch rotate"  
        style={{fontSize:heigth ? heigth/2 : 90,color: color|| "rgba(70, 85, 186,.7)"}} ></i>
    </div>
}

export default AppSpinner;