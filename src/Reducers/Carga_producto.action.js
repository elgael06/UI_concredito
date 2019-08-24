
export const STATE_CARGA_PROD = "STATE_CARGA";

const carga_producto =(state=false,actions)=>{
    switch(actions.type){
        case STATE_CARGA_PROD:
            return state.estado;
        default:
            return state;
    }
}

export default carga_producto;