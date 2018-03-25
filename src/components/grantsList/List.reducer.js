import { SET_GRANTS, ERROR_GRANTS } from '../../types/types'

const grantsList = (state = [], action) => {
    switch(action.type) {
        case(SET_GRANTS):
            return action.grants;
        case(ERROR_GRANTS):
            return action.error;
        default:
            return state;
    }
}

export default grantsList;