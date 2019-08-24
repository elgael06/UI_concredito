// cargamos la función para crear un store
import { createStore } from 'redux';
import reducers from '../Reducers';

const initialState ={
    url:"",
    categorias:[],
    id_categoria:"",
    productos:[],
    id_producto:"",
    producto:{},
    carga_producto:false,
    carga_productos:false,
};

const store = createStore(reducers,initialState);

export default store;