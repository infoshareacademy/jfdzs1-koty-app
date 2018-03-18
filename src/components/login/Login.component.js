import React, {PureComponent} from 'react';
import DashboardHome from "../dashboardHome/DashboardHome.component";


class Login extends PureComponent {
    render() {
        return (
            <div>
                <div>Login</div>
                <DashboardHome/>
            </div>
        );
    }
}

export default Login;