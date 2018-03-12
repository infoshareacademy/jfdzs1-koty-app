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
                    <input placeholder='First Name' value={this.state.firstName}/>
                </form>
            </div>

        );
    }
}

export default Login;