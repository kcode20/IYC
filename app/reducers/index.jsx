import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  registrant: require('./registrant').default,
  form: formReducer,
})

export default rootReducer
