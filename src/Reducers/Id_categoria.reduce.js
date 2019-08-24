export const CHANGE_ID_CAT = "CHANGE_ID_CAT";

const id_categoria =(state="",actions)=>{
    switch(actions.type){
        case CHANGE_ID_CAT:
            return actions.id;
        default:
            return state;
    }
}

export default id_categoria;