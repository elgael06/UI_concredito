import Axios from 'axios';

const ObtenerAnuncios =(set,err)=>{
    Axios.get("https://creditienda.mx/api/anuncios")
    .then(res=>{
        res.status === 200 ? set(res.data) : err()
    })
}

export default ObtenerAnuncios;
