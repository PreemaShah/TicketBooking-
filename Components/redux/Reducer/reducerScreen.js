import {GET_SCREEN} from "../Action/actionType";
const INITIAL_STATE={
    screen:{}
};
export default (state=INITIAL_STATE,action)=>{
    debugger
    switch(action.type)
    {
        case GET_SCREEN:
        {
           return{
               ...state,
               screen:action.payload
           }

        }
        default:
            return state
    }

}