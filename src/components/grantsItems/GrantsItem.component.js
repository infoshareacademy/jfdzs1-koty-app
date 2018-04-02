import React, {PureComponent} from 'react';
import Dialog from 'material-ui/Dialog';

class GrantsItem extends PureComponent {
    render() {

        return (
            <div>
                <Dialog
                    {...this.props.modal}
                    {...this.props.open}
                    {...this.props.onRequestClose}>
                    {...this.props.text}
                </Dialog>
            </div>
        );
    }
}

export default GrantsItem;