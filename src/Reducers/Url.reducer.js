
export const ADD_URL ="ADD_URL";

const url = ( state="",actions)=>{
    switch (actions.type){
        case ADD_URL :
            return actions.url;
        default:
            return state;
    }
};

export default url;