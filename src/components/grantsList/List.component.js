import React, {PureComponent} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';
import styles from "../../Styles";
import { appColors } from "../../Styles";
import FlatButton from 'material-ui/FlatButton';

class GrantsComponent extends PureComponent {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentWillMount() {
        this.props.getGrants();
    }

    render() {
        const {grants} = this.props;
        const actions = [
            <FlatButton
                label="Zamknij"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        if (grants) {
            console.log(grants);
            return (
                <List>
                    <Subheader inset={true}
                               style={styles.grantsList}>
                               LISTA DOTACJI
                    </Subheader>
                    {grants.map((grant, key) => {
                        console.log(grant, key)
                        return (
                            <Link to={`/grant/${grant.id}`}>
                                <ListItem
                                    key={grant.id}
                                    leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={appColors.blue} />}
                                    rightIcon={<ActionInfo/>}
                                    primaryText={grant.name}
                                    secondaryText={`Odbiorca: ${grant.recipient}`}
                                    style={styles.grantsList}
                                >

                                </ListItem>
                            </Link>
                        )
                    }

                        )}
                </List>
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