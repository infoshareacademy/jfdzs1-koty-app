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
            search: "",
            favorites: [],
        };
    };
    saveFavorites = () => {
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    };

    componentWillMount() {
        this.props.getGrants();
    };

    componentWillUpdate() {
        console.log('favorites: ', this.state.favorites);
    };

    addGrantId =(event) => {
        if (this.state.favorites.includes(event.target.id) === false){
            this.setState({
                favorites: [...this.state.favorites, event.target.id],
            });
        }
        //TODO make the background button toggle on click and toggle setState
        event.currentTarget.style.backgroundColor = '#0F3F76';
    };

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
                            <button
                                onClick={this.saveFavorites}
                                style={styles.addFavourite}>
                                Dodaj do ulubionych
                            </button>
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
                                    onClick={this.addGrantId}>
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