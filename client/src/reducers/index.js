import {combineReducers} from 'redux'
import authreducer from './auth'
import currentuserreducer from './currentuser';
import questionsReducer from "./questions";
import usersReducer from './users';
export default combineReducers({
    authreducer,
    currentuserreducer,
    usersReducer,
    questionsReducer,
});