import { connect } from 'react-redux';

//Component
import Favorites from "./favorites.component";

const mapStateToProps = state => ({
    grants: state.grants
});

export default connect(
    mapStateToProps,
    undefined,
)(Favorites);