
export const ADD_PRODUTO ="ADD_PRODUTO";

const producto =( state={},actions )=>{
    switch(actions.type){
        case ADD_PRODUTO:
            return actions.producto;
        default:
            return state;
    }
}

export default producto;
