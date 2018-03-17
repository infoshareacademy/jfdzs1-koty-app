import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.PureComponent {
    state = {
        firstName: '',
        lastName: '',
        userName:'',
        password:'',
    };

    change = e => {
    this.props.onchange({[e.target.name]: e.target.value});
    this.setState({
    [e.target.name]: e.target.value
      });
    };

    onSubmit = e => {
        e.preventDefault();

        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });
        this.props.onChange({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });
    };


    render() {
        return (
                <form>
                    <TextField
                        name= "firstName"
                        hintText="First Name"
                        floatingLabelText="First name"
                        value = {this.state.firstName}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />

                <br />
                    <TextField
                        name= "lastName"
                        hintText="Last Name"
                        floatingLabelText="Last name"
                        value = {this.state.lastName}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />
                <br />
                    <TextField
                        name= "username"
                        hintText="Username"
                        floatingLabelText="Username"
                        value = {this.state.userName}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />
                <br />
                    <TextField
                        name= "email"
                        hintText="email"
                        floatingLabelText="email"
                        value = {this.state.email}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />
                    <TextField
                        name= "password"
                        hintText="password"
                        floatingLabelText="password"
                        value = {this.state.password}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                    />
                    <br />
                    <RaisedButton label="Submit" onClick={e => this.onSubmit(e)}secondary />
                </form>


        );
    }
}
