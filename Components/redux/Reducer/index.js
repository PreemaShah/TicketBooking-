import {combineReducers} from 'redux'
import movieReducer from './reducerMovie'
import userReducer from './reducerUser'
import cityReducer from './reducerLocation'
import theatreReducer from './reducerTheatre'
import screenReducer from './reducerScreen'
const appReducer = combineReducers({
    Movie:movieReducer,
    User:userReducer,
    City:cityReducer,
    Theatre:theatreReducer,
    Screen:screenReducer
});
export default appReducer;