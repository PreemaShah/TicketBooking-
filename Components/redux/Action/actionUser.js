import {USER_REG,USER_LOGIN,LOG_OUT} from './actionType'
import constant from '../../../apiCall/apiConst'
import {apiCall} from '../../../apiCall/apiCall'
import {AsyncStorage} from 'react-native'


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
                data:doc
            })
        }).catch((err)=>{
            console.log(err);
        })
    }


};
export const UserLogOut=()=>{
    return(dispatch,getState)=> {

        return AsyncStorage.getItem('userToken').then((token) => {

            console.log(token)

            if(!token)
            {
                token="";
            }
            else{

                return apiCall(constant.BASE_URL+constant.LOGOUT,'put',{},{'x-auth':token}).then((response)=>{
                    console.log(response.status);
                    debugger
                    dispatch({
                        type:LOG_OUT,
                        payload:response.status
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            }
        })}
}