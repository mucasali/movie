import { put, select } from 'redux-saga/effects'
// import GithubActions, { GithubSelectors } from '../Redux/GithubRedux'
import { is } from 'ramda'
import NavigationServices from '../Services/NavigationServices'

// exported to make available for tests
// export const selectAvatar = GithubSelectors.selectAvatar

// process STARTUP actions
export function * startup (action) {
  NavigationServices.replace('MainScreen')
}
