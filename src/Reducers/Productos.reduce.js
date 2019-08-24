
export const ADD_PRODUCTOS = "ADD_PRODUCTOS";

export const REMOVE_PRODUCTOS = "REMOVE_PRODUCTOS";

const productos=(state=[],actions)=>{
    switch(actions.type){
        case ADD_PRODUCTOS:
            return actions.productos;
        case REMOVE_PRODUCTOS:
            return [];
        default:
            return state;
    }
}

export default productos;
