import React, {PureComponent} from 'react';


class Favorites extends PureComponent {

    renderMap = (grants, items) => grants.map((grant) => items.map((item) => {
        if (grant.id === item) {
            return <div>{grant.id}</div>;
        }
    }));

    render() {
        const { grants } = this.props;
        let items = JSON.parse(localStorage.getItem('favorites'));
        console.log('Favo: ', items);
        console.log('Gra: ', grants);


        return (
            <div>Favorites{this.renderMap(grants, items)}</div>

        );
    }
}

export default Favorites;


