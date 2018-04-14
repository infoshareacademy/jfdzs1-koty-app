import React, {PureComponent} from 'react';
import styles from "../../Styles";

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
            <div style={styles.listItem}>
                <div style={styles.itemInfo}>{`Tytuł: ${grant.name}`}</div>
                <div style={styles.itemInfo}>{`Odbiorca: ${grant.recipient}`}</div>
                <div style={styles.itemInfo}>{grant.target}</div>
            </div>
        );
    }
}
export default GrantsItem;