/* @flow */
import thunkMiddleware from 'redux-thunk'
import profile from './profile/profileDuck'
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

export default createStoreWithMiddleware(combineReducers({
    profile,
}))
