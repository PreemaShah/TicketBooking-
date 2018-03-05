import {USER_REG,USER_LOGIN} from './actionType'
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

    return(dispatch,getState)=>{

        return apiCall(constant.BASE_URL+constant.LOGIN,'post',{
            email:email,
            password:password
        },{}).then((doc)=>{
            console.log(doc);
            dispatch({
                type:USER_LOGIN,
                payload:doc.data.token1,
                status:doc.status,
                data:doc.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }


}