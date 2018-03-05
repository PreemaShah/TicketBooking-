import {USER_REG,USER_LOGIN} from '../Action/actionType';
const INITIAL_STATE={
    user:{},
    token:'',
    status:0,
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
                token:action.payload,
                status:action.status,
                data:action.data

            }
        }
        default:{
            return state
        }
    }
}