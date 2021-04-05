import { combineReducers } from 'redux'

import userReducer from './User'
import appReducer from './App'

const rootReducer = combineReducers({

  user: userReducer,
  app: appReducer
})

export default rootReducer
