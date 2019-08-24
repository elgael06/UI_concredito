
export const ADD_CATEGORIAS = "ADD_CATEGORA"; 
export const RESTORE_CATEGORIAS = "RESTORE_CATEGORIA";

const categorias =(state=[],actions)=>{
    switch(actions.type){
        case ADD_CATEGORIAS:
            return actions.categorias;
        case RESTORE_CATEGORIAS:
            return [];
        default:
            return state;
    }
}

export default categorias;