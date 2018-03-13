import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Dashboard from './components/dashboard/Dashboard.component';
import Login from './components/login/Login.component';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/login' component={Login}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
