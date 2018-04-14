import { SHOW_GRANT } from '../../types/types'

const grantsItem = (state = [], action) => {
    switch(action.type) {
        case(SHOW_GRANT):
            return action.grants;
        default:
            return state;
    }
}

export default grantsItem;