import {GET_DATA,GET_RELEASEDMOVIE} from "../Action/actionType";

const INITIAL_STATE ={
    movie:[],
    page:'',
    releasedMovie:[]
};

export default (state=INITIAL_STATE,action)=>{

    switch(action.type)
    {
        case GET_DATA:{

            return{
                ...state,
                movie:action.payload
            }
        }
        case GET_RELEASEDMOVIE:{

            return{
                ...state,
                releasedMovie:action.payload
            }
        }
        default:{
            return state
        }
    }
}