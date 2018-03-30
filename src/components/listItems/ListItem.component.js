import React, {PureComponent} from 'react';

class GrantsComponent extends PureComponent {
    render() {
        const {grants} = this.props;
        if (grants) {
            return (
                <MobileTearSheet>
                    <List>
                        <Subheader inset={true}>Files</Subheader>
                        <ListItem
                            leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Vacation itinerary"
                            secondaryText="Jan 20, 2014"
                        />
                        <ListItem
                            leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Kitchen remodel"
                            secondaryText="Jan 10, 2014"
                        />
                    </List>
                </MobileTearSheet>
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