import { combineReducers } from 'redux'
import counter from './counter'
import schedule from './schedule'

export default combineReducers({
  counter,
  schedule
})