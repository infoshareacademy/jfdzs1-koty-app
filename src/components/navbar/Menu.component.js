import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import './Menu.style.css';


class Menu extends PureComponent {
    render() {
        return (

            <div>
                <AppBar
                    title="Menu"
                    onLeftIconButtonClick={this.props.taggleMenu}>
                    <p>Witaj!</p>

                </AppBar>
                <Drawer
                    open={this.props.display}
                    onRequestChange={this.props.taggleMenu}
                    docked={false}
                    width={200}>
                    <MenuItem><Link to="/login">Login</Link></MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Menu;
