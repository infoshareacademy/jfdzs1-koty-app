import React, {PureComponent} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import styles from "../../Styles";
import { appColors } from "../../Styles";
import './LIst.component.css';

class GrantsComponent extends PureComponent {
    constructor(){
        super();
        this.state ={
            search: ''
        };
    }
    upDateSearch(event){
        this.setState({search: event.target.value});
    }
    componentWillMount() {
        super.componentDidMount && super.componentDidMount();
        this.props.getGrants();
    }
    render() {
        const {grants} = this.props;
        const filterListGrants = grants.filter(
            (grant) =>{
                return grant.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        if (grants) {
            return (
                <div className="listContent">
                    <input type="text"
                           placeholder="search"
                           value={this.state.search}
                           onChange={this.upDateSearch.bind(this)}/>
                    <List>
                        <Subheader inset={true}
                                   style={styles.grantsList}>
                            LISTA DOTACJI

                        </Subheader>
                        {filterListGrants.map((grant, index) =>
                            <ListItem
                                key={index}
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={appColors.blue} />}
                                rightIcon={<ActionInfo />}
                                primaryText={grant.name}
                                secondaryText={`Odbiorca: ${grant.recipient}`}
                                style={styles.grantsList}
                            />
                        )}
                    </List>
                </div>
            )
        } else {
            return (
                <section>
                </section>
            )
        }

    }
}
export default GrantsComponent;