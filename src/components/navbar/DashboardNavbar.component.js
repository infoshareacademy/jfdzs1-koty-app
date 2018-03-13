import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class DashboardNavbar extends PureComponent {


    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <div>{this.props.text}</div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Dashboard</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/dasboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default DashboardNavbar;