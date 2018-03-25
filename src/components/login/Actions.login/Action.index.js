import { ADD_TODO } from './Action.login.signin';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};