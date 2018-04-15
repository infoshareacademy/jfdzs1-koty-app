import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import image from '../../../images/logo_biale_poziom.svg';
import styles from "../../Styles";

class Menu extends PureComponent {
    render() {
        return (

            <div>
                <AppBar
                    title={<img src={image} className="App-logo" alt="logo" style={styles.logo}/>}
                    onLeftIconButtonClick={this.props.taggleMenu}
                    style={styles.appBar}>
                </AppBar>
                <Drawer
                    open={this.props.display}
                    onRequestChange={this.props.taggleMenu}
                    docked={false}
                    width={200}
                    style={styles.sideBar}>
                    <MenuItem><Link to="/login" style={styles.sideBarItem}>Login</Link></MenuItem>
                    <MenuItem><Link to="/grants" style={styles.sideBarItem}>Lista dotacji</Link></MenuItem>
                    <MenuItem><Link to="/grants" style={styles.sideBarItem}>Ulubione</Link></MenuItem>
                    <MenuItem><Link to="/grants" style={styles.sideBarItem}>Aktualności</Link></MenuItem>
                    <MenuItem><Link to="/grants" style={styles.sideBarItem}>Pliki do pobrania</Link></MenuItem>
                    <MenuItem><Link to="/grants" style={styles.sideBarItem}>Wyloguj</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Menu;