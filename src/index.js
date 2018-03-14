import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.component';
import Login from './components/login/Login.component';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/login' component={Login}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
