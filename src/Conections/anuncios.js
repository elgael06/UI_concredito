import Axios from 'axios';

const ObtenerAnuncios =(set,err)=>{
    Axios.get("http://creditienda.mx/api/anuncios")
    .then(res=>{
        res.status === 200 ? set(res.data) : err()
    })
}

export default ObtenerAnuncios;