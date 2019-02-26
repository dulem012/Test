import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { reducer, initialState } from '../reducers/index'

const middlewares = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middlewares))

export default store