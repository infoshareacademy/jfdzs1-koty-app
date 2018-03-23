import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Dashboard from './components/dashboard/Dashboard.component';
import Login from './components/login/Login.component';
import Form from '/components/form/Form.component.js';

const form = false;

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={ login ?  Dashboard : Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/form' component={Form}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
