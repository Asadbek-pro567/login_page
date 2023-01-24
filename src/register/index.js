import { createStore, combineReducers } from "redux";

import Shop from './userData'

const reducer = combineReducers({
    Shop
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store