import { connect } from 'react-redux';

import { openGoogleSignIn } from './components/login/Actions.login/Action.login.signin.js';

import UserComponent from './components/login/Containers.login/Containers.login.userContainer.js'

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToprops = dispatch => ({
    signIn: () => dispatch(openGoogleSignIn())
});

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(UserComponent);