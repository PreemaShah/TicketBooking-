import {GET_THEATRE} from "../Action/actionType";
const INITIAL_STATE={
    thtr:[]
};
export default (state=INITIAL_STATE,action)=>{

    switch (action.type)
    {
        case GET_THEATRE:
        {

            return{
                ...state,
                thtr:action.payload
            }
        }
        default:
            return state
    }
}