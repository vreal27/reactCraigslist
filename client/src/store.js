import { createStore, combineReducers } from 'redux'

import rlReducer from './reducers/rlReducer'
// import all reducers here

const rootReducer = combineReducers({
  rlReducer
  // put reducers here
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store