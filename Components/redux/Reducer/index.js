import {combineReducers} from 'redux'
import movieReducer from './reducerMovie'
import userReducer from './reducerUser'

const appReducer = combineReducers({
    Movie:movieReducer,
    RegUser:userReducer
});
export default appReducer;