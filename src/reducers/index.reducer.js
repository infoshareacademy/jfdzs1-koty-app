import { combineReducers } from 'redux'
import grants from '../components/grantsList/List.reducer.js'
import grantsItem from '../components/grantsItems/GrantsItem.reducer'

export default combineReducers({
    grants,
    grantsItem
})