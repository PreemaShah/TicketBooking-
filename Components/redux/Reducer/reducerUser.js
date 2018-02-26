import {USER_REG} from '../Action/actionType';
const INITIAL_STATE={
    user:{}
}
export default(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case USER_REG:
        {
            return{
                ...state,
                user:action.payload
            }
        }
        default:{
            return state
        }
    }
}