import { connect } from 'react-redux';

import { showItem } from './GrantsItem.action';

import GrantsItemComponent from "./GrantsItem.component";

const mapDispatchToprops = dispatch => ({
    grantsItem: () => dispatch(showItem())
});

export default connect(
    undefined,
    mapDispatchToprops
)(GrantsItemComponent);