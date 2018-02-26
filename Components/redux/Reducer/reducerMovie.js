import {GET_DATA} from "../Action/actionType";

const INITIAL_STATE ={
    movie:[],
    page:''
};

export default (state=INITIAL_STATE,action)=>{

    switch(action.type)
    {
        case GET_DATA:{

            return{
                ...state,
                movie:action.payload
            }
        }
        default:{
            return state
        }
    }
}