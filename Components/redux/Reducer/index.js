import {combineReducers} from 'redux'
import movieReducer from './reducerMovie'
import userReducer from './reducerUser'
import cityReducer from './reducerLocation'
import theatreReducer from './reducerTheatre'

const appReducer = combineReducers({
    Movie:movieReducer,
    User:userReducer,
    City:cityReducer,
    Theatre:theatreReducer
});
export default appReducer;