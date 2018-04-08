import React, {PureComponent} from 'react';


class GrantsItem extends PureComponent {
    render() {
//Todo: add action for download single item
        let grant;
        this.props.grants.map((item)=> {
            if(item.id === this.props.match.params.id){
                grant = item;
            }
        })

        console.log(grant);


        return (
            <div>

            </div>
        );
    }
}

export default GrantsItem;