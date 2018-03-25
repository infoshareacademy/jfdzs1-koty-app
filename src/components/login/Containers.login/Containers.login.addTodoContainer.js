import { connect } from 'react-redux';
import { addTodo } from './components/login/Actions.login/Action.index.js';

import AddTodoComponent from './components/login/Containers.login/Containers.login.addTodoContainer.js';

const mapDispatchToprops = dispatch => ({
    addTodo: text => dispatch(addTodo(text))
});

export default connect(
    undefined,
    mapDispatchToprops
)(AddTodoComponent);