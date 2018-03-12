import React, {PureComponent} from 'react';
import './Login.style.css';


class Login extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        userName:'',
        password:'',
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder='First Name'
                           value={this.state.firstName}/>
                    <input placeholder='Last Name'
                           value={this.state.lastName}/>
                    <input placeholder='userName'
                           value={this.state.userName}/>
                    <input placeholder='password'
                           value={this.state.password}/>
                </form>
            </div>

        );
    }
}

export default Login;