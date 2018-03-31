import { SHOW_ITEM } from '../../types/types.js'

export const showItem = (grants) => {
    return {
        type: SHOW_ITEM,
        grants
    }
}