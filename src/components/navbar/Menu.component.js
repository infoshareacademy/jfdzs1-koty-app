import React, {PureComponent} from 'react';
import './Menu.style.css';



class Menu extends PureComponent {
    render() {
        return (
            <div className="burger-menu" onClick={this.props.taggleMenu}>

                    <div className="burger"> </div>
                    <div className="burger"> </div>
                    <div className="burger"> </div>

                <div className={this.props.display ? "active" : "hide"}>
                    <a className='menu-links'>Ulubione</a>
                    <a className='menu-links'>Wyszukaj</a>
                    <a className='menu-links'>Home</a>
                </div>
            </div>
        );
    }
}

export default Menu;