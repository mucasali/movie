import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPopularRequest: ['reset'],
  getPopularSuccess: ['data', 'page', 'loadMore'],
  getPopularFailure: ['message'],
})

export const MovieTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const DEFAULT_STATE = {
  fetching: false, error: true, data: [], message: "",
  page: 1, loadMore: false
}

export const INITIAL_STATE = Immutable({
  popular: {...DEFAULT_STATE},
})

/* ------------- Selectors ------------- */

export const MovieSelectors = {
  popular: state => state.movie.popular,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const getPopularRequestReducer = (state, {reset}) => {
  if (reset){
    return state.merge({
      popular: {...state.popular, fetching: true, data: [], }
    })
  } else {
    return state.merge({
      popular: {...state.popular, fetching: true}
    })
  }
}

// successful api lookup
export const getPopularSuccessReducer = (state, {data, page, loadMore}) => {
  let newData = state.popular.data.concat(data)
  return state.merge({ popular: {
    ...state.popular, fetching: false, error: false, data: newData, loadMore, page
  }})
}

// Something went wrong somewhere.
export const getPopularFailureReducer = (state, {message}) =>
  state.merge({ popular: {
    ...state.popular, fetching: false, error: true, message
  }})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POPULAR_REQUEST]: getPopularRequestReducer,
  [Types.GET_POPULAR_SUCCESS]: getPopularSuccessReducer,
  [Types.GET_POPULAR_FAILURE]: getPopularFailureReducer,
})
