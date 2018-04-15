import { connect } from 'react-redux';

import { getGrants } from '../grantsList/List.action';

import GrantsItem from './GrantsItem.component';

const mapStateToProps = state => ({
    grants: state.grants
});

const mapDispatchToProps = dispatch => ({
    getGrants: () => dispatch(getGrants())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GrantsItem);