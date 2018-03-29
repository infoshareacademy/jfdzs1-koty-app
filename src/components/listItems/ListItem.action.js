import { SHOW_GRANT } from '../../types/types.js'


export const showGrant = (grants) => {
    return {
        type: SHOW_GRANT,
        grants
    }
}

