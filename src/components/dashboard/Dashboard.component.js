import React, {PureComponent} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DashboardNavbar from "../navbar/DashboardNavbar.component";


class Dashboard extends PureComponent {
    render() {
        return (
            <DashboardNavbar text='hi'/>
        );
    }
}

export default Dashboard;