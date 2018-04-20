import React, {PureComponent} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';
import styles from "../../Styles";
import { appColors } from "../../Styles";
import './LIst.component.css';

class GrantsComponent extends PureComponent {
    constructor(){
        super();
        this.state ={
            search: '',
            favorite: {},
        };
    }

    componentWillMount() {
        this.props.getGrants();
    }




    upDateSearch(event){
        this.setState({search: event.target.value});
    }

    render() {
        const {grants} = this.props;
        const filterListGrants = grants.filter(
            (grant) =>{
                return grant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        // const setFavorite = (grants) => {
        //     let selected;
        //     console.log('grants: ' + grants);
        //     grants.map((item) => {
        //         if( item.id === this.id) {
        //             selected = item;
        //         }
        //     })
        //     console.log('selected: ' + selected);
        //     console.log('GRANTS: ' + grants);
        // }

        if (grants) {
            console.log(grants);
            return (
                <List>
                   <div className="listContent">
                    <input type="text"
                           placeholder="search"
                           value={this.state.search}
                           onChange={this.upDateSearch.bind(this)}/>
                        <Subheader inset={true}
                                   style={styles.grantsList}>
                            LISTA DOTACJI
                            <button style={styles.addFavourite}>Dodaj do ulubionych</button>

                        </Subheader>
                        {filterListGrants.map((grant) =>
                            <div style={styles.listItemDiv} key={grant.id}>
                                <Link style={styles.link} to={`/grant/${grant.id}`}>
                                    <ListItem
                                        key={grant.id}
                                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={appColors.blue} />}
                                        primaryText={grant.name}
                                        secondaryText={`Odbiorca: ${grant.recipient}`}
                                        style={styles.grantsList}
                                    />
                                </Link>
                                <button
                                    id={grant.id}
                                    key={grant.id}
                                    style={styles.checkbox}
                                    onClick={(grant)=> this.setState({favorite: {...grant} })}>
                                </button>
                            </div>
                        )}
                    </div>
                </List>
        )} else {
            return (
                <section>
                </section>
            )
        }

    }
}
export default GrantsComponent;