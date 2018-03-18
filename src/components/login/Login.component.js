import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.style.css';

class Login extends PureComponent {
    state = {
        email:'',
        password:'',
    };

    change = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
    };

    onSubmit = e => {
        e.preventDefault();
        //todo login authorization
    };

    render() {
        return (
            <MuiThemeProvider>
                <form className="login-form">
                    <div>
                        <TextField
                            name="email"
                            hintText="email"
                            floatingLabelText="email"
                            value={this.state.email}
                            onChange={this.change}
                            floatingLabelFixed
                        />
                    </div>
                    <div>
                        <TextField
                        name="password"
                        hintText="password"
                        floatingLabelText="password"
                        value={this.state.password}
                        onChange={this.change}
                        floatingLabelFixed
                    />
                    </div>
                    <div>
                        <RaisedButton className="login-form__button" label="Submit" onClick={e => this.onSubmit(e)}secondary />
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }
}
export default Login