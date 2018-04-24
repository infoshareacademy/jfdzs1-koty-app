import React, {PureComponent} from 'react';
import styles from "../../Styles";

class Favorites extends PureComponent {

    renderMap = (grants, items) => grants.map((grant) => items.map((item) => {
        if (grant.id === item) {
            return <div
                    style={styles.favoritesItem}
                    key={grant.id}>{grant.name}</div>;
        }
    }));

    render() {
        const { grants } = this.props;
        let items = JSON.parse(localStorage.getItem('favorites'));
        console.log('Favo: ', items);
        console.log('Gra: ', grants);


        return (
            <div style={styles.favoritesRegion}>LISTA WYBRANYCH PRZEZ CIEBIE DOTACJI{this.renderMap(grants, items)}</div>

        );
    }
}

export default Favorites;


