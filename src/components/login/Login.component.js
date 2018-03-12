import React, {PureComponent} from 'react';
import './Login.style.css';


export default class Login extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        userName:'',
        password:'',
    }

    onSubmit =(e)=>{
        e.preventDefault();
    }

    }
    render(){
    return(
        <div>
        <form>
            <br>
        <input placeholder='First Name'
               value={this.state.firstName}/>
        <br>
        <input placeholder='Last Name'
                   value={this.state.lastName}/>
        <br>
        <input placeholder='userName'
                       value={this.state.userName}/>
        <br>
        <input type="password" placeholder='password'
                           value={this.state.password}/>
        <br>
        <button onClick={(e) => this.onSubmit(event)}>Submit</button>

        </form>
    </div>
      );
    }
}

export default Login;