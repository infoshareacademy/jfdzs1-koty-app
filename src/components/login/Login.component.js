import React, {PureComponent} from 'react';
import './Login.style.css';


class Login extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        userName:'',
        password:'',
    }

    onSubmit =()=>{
        console.log(this.state)
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
                    <input  type="password" placeholder='password'
                           value={this.state.password}/>
                    <button onClick={( this.onSubmit())}>Submit</button>
                </form>
            </div>

        );
    }
}

export default Login;