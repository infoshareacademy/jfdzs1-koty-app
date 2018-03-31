import { connect } from 'react-redux';

import { getGrants } from './List.action';

import GrantsComponent from './List.component';

const mapStateToProps = state => ({
    grants: state.grants
});

const mapDispatchToProps = dispatch => ({
    getGrants: () => dispatch(getGrants())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GrantsComponent);