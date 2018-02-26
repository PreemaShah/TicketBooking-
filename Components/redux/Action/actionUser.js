import {USER_REG} from './actionType'
import constant from '../../../apiCall/apiConst'
import {apiCall} from '../../../apiCall/apiCall'


export const UserReg=(Name,email,password,UserId)=>{


    return(dispatch,getState)=>{

        return apiCall(constant.BASE_URL+constant.USERS,'post',{
            Name:Name,
            email:email,
            password:password,
            UserId:UserId
        },{}).then((response)=>{
            console.log(response);
            dispatch({
                type:USER_REG,
                payload:response.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
}


export const UserLogIn=(email,password)=>{

}