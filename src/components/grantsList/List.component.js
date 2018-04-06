import React, {PureComponent} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Subheader from 'material-ui/Subheader';
import styles from "../../Styles";
import { appColors } from "../../Styles";
import Dialog from 'material-ui/Dialog';
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
        super.componentDidMount && super.componentDidMount();
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
            return (
                <List>
                    <Subheader inset={true}
                               style={styles.grantsList}>
                               LISTA DOTACJI
                    </Subheader>
                    {grants.map((grant) =>
                            <ListItem
                                key={grant.id}
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={appColors.blue} />}
                                rightIcon={<ActionInfo/>}
                                primaryText={grant.name}
                                secondaryText={`Odbiorca: ${grant.recipient}`}
                                style={styles.grantsList}
                                onClick={()=> {
                                    <Dialog
                                        key={grant.id}
                                        title={grant.name}
                                        actions={actions}
                                        modal={false}
                                        open={this.state.open}
                                        onRequestClose={this.handleClose}
                                    >
                                        {grant.target}
                                    </Dialog>
                                    this.handleOpen();
                                }
                                    }
                                    >

                            </ListItem>
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