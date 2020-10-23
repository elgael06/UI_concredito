import Axios from 'axios';

const ObtenerProductoID = async id =>{
    let respuesta = await Axios.get(`https://creditienda.mx/api/productos/elastic/${id}`)
    return respuesta.status===200 ? respuesta.data : null;
}

export default ObtenerProductoID;
