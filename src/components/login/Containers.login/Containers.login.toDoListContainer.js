import { connect } from 'react-redux'

import TodoListComponent from './components/login/Containers.login/Containers.login.toDoListContainer.js'

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(
    mapStateToProps,
    undefined
)(TodoListComponent);