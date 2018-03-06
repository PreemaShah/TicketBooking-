import {GET_CITY} from "./actionType";
import constant from "../../../apiCall/apiConst"
import {apiCall} from "../../../apiCall/apiCall";

export const getCity = ()=>{

    return (dispatch,getState)=>{

        return apiCall( constant.BASE_URL + constant.CITY,'get').then((response)=>{
            //console.log(response);

            dispatch({
                type:GET_CITY,
                payload:response.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

}
