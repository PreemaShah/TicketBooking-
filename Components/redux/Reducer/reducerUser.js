import {USER_REG,USER_LOGIN,LOG_OUT} from '../Action/actionType';
const INITIAL_STATE={
    user:{},
    token1:'',
    status:0,
    status1:0,
    data:{}
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
        case USER_LOGIN:
        {
            return{
                ...state,
                token1:action.payload,
                status:action.status,
                data:action.data

            }
        }
        case LOG_OUT:
        {

            return{
                ...state,
                status1:action.payload
            }
        }
        default:{
            return state
        }
    }
}