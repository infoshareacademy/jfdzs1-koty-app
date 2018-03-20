import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './DashboardNavbar.style.css';
import Menu from "./Menu.component";




class Navbar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {
        text: "mój domyślny text",
    };

    handleOnClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    };

    render() {
        return (
            <div>
                <Menu
                    taggleMenu={this.handleOnClick}
                    display={this.state.showMenu}
                />
            </div>
        );
    }
}

export default Navbar;