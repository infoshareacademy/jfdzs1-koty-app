import { combineReducers } from 'redux'
import todos from './components/login/Reducers.login/Reducers.login.todos.js';
import user from './components/login/Reducers.login/Reducers.login.user.js';

export default combineReducers({
    todos,
    user
})