import Axios from 'axios';

const ObtenerProductos =(categoria,set,err)=>{
    Axios.get(`https://creditienda.mx/api/categorias/${categoria}/productos-elastic?filter=%7B%22limit%22:20,%22skip%22:0%7D`)
    .then(res=>{
        res.status === 200 ? set(res.data) : err()
    })
}

export default ObtenerProductos;
