import {combineReducers} from 'redux'
import movieReducer from './reducerMovie'
import userReducer from './reducerUser'
import cityReducer from './reducerLocation'

const appReducer = combineReducers({
    Movie:movieReducer,
    User:userReducer,
    City:cityReducer
});
export default appReducer;