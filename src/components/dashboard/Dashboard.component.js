import React, {PureComponent} from 'react';
import Navbar from "../navbar/DashboardNavbar.component";



class Dashboard extends PureComponent {

   render() {
        return (
            <Navbar text="Witaj!"/>
        );
    }
}

export default Dashboard;