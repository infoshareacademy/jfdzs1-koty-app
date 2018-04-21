import { combineReducers } from 'redux'
import grants from '../components/grantsList/List.reducer.js'
import grantsItem from '../components/grantsItems/GrantsItem.reducer'
// import setFavorites from '../components/favorites/favorites.reducer'

export default combineReducers({
    grants,
    grantsItem,
    // setFavorites
})