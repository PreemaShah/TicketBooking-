import {GET_SCREEN} from "./actionType";
import {apiCall} from "../../../apiCall/apiCall";
import constant from '../../../apiCall/apiConst';
import {AsyncStorage} from "react-native";

export const getSeatNumber=(props)=>
{
    console.log(props);
    return(dispatch,getState)=>{
        return AsyncStorage.getItem('userToken').then((token) => {

            console.log(token)

            if(!token)
            {
                token="";
            }
            else {
                return apiCall(constant.BASE_URL + constant.GETSCREEN+props, 'get', {}, {'x-auth': token}).then((response) => {
                    console.log(response);
                    debugger
                    dispatch({
                        type:GET_SCREEN,
                        payload:response.data
                    });
                    debugger
                    return Promise.resolve(response.data);
                }).catch((err)=>{
                    console.log(err);
                    return Promise.reject(err);
                })
            }
        })
    }
};