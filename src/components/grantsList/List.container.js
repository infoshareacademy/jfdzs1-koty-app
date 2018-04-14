import { connect } from 'react-redux';

import { getGrants } from './List.action';

import GrantsComponent from './List.component';

const mapStateToProps = state => ({
    grants: state.grants
});

const mapDispatchToprops = dispatch => ({
    getGrants: () => dispatch(getGrants())
});

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(GrantsComponent);