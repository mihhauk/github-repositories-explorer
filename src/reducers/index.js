import { combineReducers } from 'redux'
import users from './users'
import userRepositories from './userRepositories'
import status from './status'
export default combineReducers({ users, userRepositories, status })
