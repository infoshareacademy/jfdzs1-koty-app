import { SET_GRANTS, ERROR_GRANTS } from '../../types/types.js'


const setGrants = (grants) => {
    return {
        type: SET_GRANTS,
        grants
    }
}

const errorGrants = (error) => {
    return {
        type: ERROR_GRANTS,
        error
    }
}


export const getGrants = () => {
    const url = 'https://unijne-dotacje.firebaseio.com/grants.json';
    return (dispatch) => {
        fetch(url)
            .then(result => result.json())
            .then(Object.values)
            .then(fetchedData => dispatch(setGrants(fetchedData)))
            .catch(error => dispatch(errorGrants('Unable to show the list')))
    };
};
