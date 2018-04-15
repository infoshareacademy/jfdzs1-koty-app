import { SHOW_ITEM } from '../../types/types'

const showItem = (state = [], action) => {
    switch(action.type) {
        case(SHOW_ITEM):
            return action.grants;
        default:
            return state;
    }
}

export default showItem;