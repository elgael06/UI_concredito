
export const ADD_ID_PRODUCTO ="ADD_ID_PRODUCTO";

const id_producto =(state="",actions)=>{
    switch(actions.type){
        case ADD_ID_PRODUCTO:
            return actions.id;
        default:
            return state;
    }
}

export default id_producto;
