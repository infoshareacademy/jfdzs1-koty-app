import React, { Component } from 'react';
import "./App.css";
import './Login.component.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
class App extends Component {
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            ...fields:{
            ...this.state.fields,
                updatedValue
            }
        })
    };

    render() {
        return (
        <MuiThemeProvider>
            <div className="App">
                <Form onChange={fields => this.onChange(fields)} />
                <p>
                    {JSON.stringify(this.state.fields, null, 2)}
                </p>
            </div>
        </MuiThemeProvider>


        );
    }

}
injectTapEventPlugin();
export default App;
