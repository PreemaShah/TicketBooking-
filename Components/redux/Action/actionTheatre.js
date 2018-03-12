import {GET_THEATRE} from "./actionType";
import {apiCall} from '../../../apiCall/apiCall';
import constant from '../../../apiCall/apiConst';
export const getTheatre =(props)=>{
    return(dispatch,getState)=>{
        return apiCall(constant.BASE_URL+constant.THEATRE+'/'+props,'get',{},{}).then((response)=>{

            console.log(response);

            dispatch({
                type:GET_THEATRE,
                payload:response.data
            });

            return Promise.resolve(response.data);
        }).catch((err)=>{
            console.log(err);
            return Promise.reject(err);
        })
    }
}