import { SING_IN, SIGN_OUT,SIGN_IN } from './components/login/Actions.login/Action.login.types.js';

const signIn = (user) => {
    console.log(user);
    return {
        type: SIGN_IN,
        user
    }
};

const signOut = () => {
    return {
        type: SIGN_OUT,
        user
    }
};

const signinError = (error) => {
    return {
        type: SIGNIN_ERROR,
        error
    }
};

export const openGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return (dispatch) => {
        firebase.auth().signInWithPopup(provider)
            .then(result => dispatch(signIn(result.user)))
            .catch(error => dispatch(signinError('Error while signin in')));
    }
};