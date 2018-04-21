import React, {PureComponent} from 'react';


class Favorites extends PureComponent {

    render() {
        const { grants } = this.props;
        let items = JSON.parse(localStorage.getItem('favorites'));
        console.log('Favo: ', items);
        console.log('Gra: ', grants);

        return (
            <div>Favorites</div>
            // grants.map(element => {
            //     if(items.include(element.id)){
            //         return <div>{element.name}</div>
            //     }
            // })

        );
    }
}

export default Favorites;


