//libreria
import { combineReducers } from 'redux';
//reducers
import url from './Url.reducer';
import categorias from './Categorias.reducer';
import id_categoria from './Id_categoria.reduce';
import productos from './Productos.reduce';
import id_producto from './Id_producto.reduce';
import producto from './Producto.reduce';
import carga_producto from './Carga_producto.action';
import carga_productos from './Carga_lista_productos.action';

const reducers = combineReducers({
    url,
    categorias,
    id_categoria,
    productos,
    id_producto,
    producto,
    carga_producto,
    carga_productos
});

export default reducers;