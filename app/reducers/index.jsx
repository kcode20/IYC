import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,  
  registrant: require('./registrant').default,
})

export default rootReducer
