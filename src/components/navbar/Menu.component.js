import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import './Menu.style.css';



class Menu extends PureComponent {
    render() {
        return (
            <div className="burger-menu" onClick={this.props.taggleMenu}>

                    <div className="burger"> </div>
                    <div className="burger"> </div>
                    <div className="burger"> </div>

                <div className={this.props.display ? "active" : "hide"}>
                    <Link className='menu-links' to="">Ulubione</Link>
                    <Link className='menu-links' to='/dashboard'>Home</Link>
                    <Link className='menu-links' to='/login'>Wyloguj</Link>
                </div>
            </div>
        );
    }
}

export default Menu;