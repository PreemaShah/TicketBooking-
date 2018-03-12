import {GET_DATA,GET_RELEASEDMOVIE} from "./actionType";
import constant from "../../../apiCall/apiConst"
import {apiCall} from "../../../apiCall/apiCall";

export const getMovie=(props)=>{


    //console.log(props)
    return(dispatch,getState)=>{
        return apiCall(constant.BASE_URL+constant.MOVIE,'get',{},{}).then((response)=>{
            //console.log(response);

            dispatch({
                type:GET_DATA,
                payload:response.data
            });

            return Promise.resolve(response.data);
        }).catch((error)=>{
            console.log(error);
        })

    }

}

export const getReleasedMovie=(props)=>{

    console.log(props);

    return(dispatch,getState)=>{
        return apiCall(constant.BASE_URL+constant.MOVIERELEASED+props,'get',{},{}).then((response)=>{
            console.log(response);

            dispatch({
                type:GET_RELEASEDMOVIE,
                payload:response.data
            });

            return Promise.resolve(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }
}