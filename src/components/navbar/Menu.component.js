import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import styles from "../../Styles";


class Menu extends PureComponent {
    render() {
        return (

            <div>
                <AppBar
                    title="Menu"
                    onLeftIconButtonClick={this.props.taggleMenu}
                    style={styles.appBar}>
                </AppBar>
                <Drawer
                    open={this.props.display}
                    onRequestChange={this.props.taggleMenu}
                    docked={false}
                    width={200}
                    style={styles.sideBar}>
                    <MenuItem><Link to="/login">Login</Link></MenuItem>
                    <MenuItem>Lista ulubionych</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Menu;
