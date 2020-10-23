import Axios from 'axios';

const ObtenerCategoorias = (set, err) => {
    Axios.get("https://creditienda.mx/api/categorias")
        .then(res => {
            res.status === 200 ? set(res.data) : err()
        })
}

export default ObtenerCategoorias;
