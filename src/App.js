import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.component';
import Login from './components/login/Login.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from "./components/navbar/DashboardNavbar.component";


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                      <Route exact path='/' component={Dashboard}/>
                      <Route path='/login' component={Login}/>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
