import {GET_CITY} from "../Action/actionType";
const INITIAL_STATE ={
    city:[]
}
export default (state=INITIAL_STATE,action)=>{

    switch(action.type)
    {
        case GET_CITY:
        {
           return{
               ...state,
               city:action.payload
           }
        }
        default:{
            return state
        }
    }
}