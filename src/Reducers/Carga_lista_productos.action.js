
export const STATE_LISTA_PROD ="STATE_LISTA_PROD";

const carga_productos =(state=false,actions)=>{
    switch(actions.type){
        case STATE_LISTA_PROD:
            return actions.estado;
        default :
        return state;
    }
}

export default carga_productos;
