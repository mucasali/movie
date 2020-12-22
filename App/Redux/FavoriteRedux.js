import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getFavoriteRequest: ['reset'],
  getFavoriteSuccess: ['data', 'page', 'loadMore'],
  getFavoriteFailure: ['message'],

  addFavoriteRequest: ['movie'],
  addFavoriteSuccess: ['data'],
  addFavoriteFailure: ['message'],

  removeFavoriteRequest: ['movieId'],
  removeFavoriteSuccess: ['data'],
  removeFavoriteFailure: ['message'],
})

export const FavoriteTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const DEFAULT_STATE = {
  fetching: false, error: true, data: [], message: "",
  page: 1, loadMore: false
}

export const INITIAL_STATE = Immutable({
  favorite: {...DEFAULT_STATE},
  action: {submitting: false, message: '', error: true}
})

/* ------------- Selectors ------------- */

export const FavoriteSelectors = {
  favorite: state => state.favorite.favorite,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const getFavoriteRequestReducer = (state, {reset}) => {
  if (reset){
    return state.merge({
      favorite: {...state.favorite, fetching: true, data: [], }
    })
  } else {
    return state.merge({
      favorite: {...state.favorite, fetching: true}
    })
  }
}

// successful api lookup
export const getFavoriteSuccessReducer = (state, {data, page, loadMore}) => {
  let newData = state.favorite.data.concat(data)
  return state.merge({ favorite: {
    ...state.favorite, fetching: false, error: false, data: newData, loadMore, page
  }})
}

// Something went wrong somewhere.
export const getFavoriteFailureReducer = (state, {message}) =>
  state.merge({ favorite: {
    ...state.favorite, fetching: false, error: true, message
  }})

export const addFavoriteRequestReducer = (state, {movie}) =>
  state.merge({ action: {...state.action, submitting: true, error: true, message: ''}})
export const addFavoriteSuccessReducer = (state, {data}) =>
  state.merge({
    action: {...state.action, submitting: false, error: false, message: ''},
    favorite: {...state.favorite, data}
  })
export const addFavoriteFailureReducer = (state, {message}) =>
  state.merge({
    action: {...state.action, submitting: false, error: true, message},
  })

export const removeFavoriteRequestReducer = (state, {movie}) =>
  state.merge({ action: {...state.action, submitting: true, error: true, message: ''}})
export const removeFavoriteSuccessReducer = (state, {data}) =>
  state.merge({
    action: {...state.action, submitting: false, error: false, message: ''},
    favorite: {...state.favorite, data}
  })
export const removeFavoriteFailureReducer = (state, {message}) =>
  state.merge({
    action: {...state.action, submitting: false, error: true, message},
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FAVORITE_REQUEST]: getFavoriteRequestReducer,
  [Types.GET_FAVORITE_SUCCESS]: getFavoriteSuccessReducer,
  [Types.GET_FAVORITE_FAILURE]: getFavoriteFailureReducer,

  [Types.ADD_FAVORITE_REQUEST]: addFavoriteRequestReducer,
  [Types.ADD_FAVORITE_SUCCESS]: addFavoriteSuccessReducer,
  [Types.ADD_FAVORITE_FAILURE]: addFavoriteFailureReducer,

  [Types.REMOVE_FAVORITE_REQUEST]: removeFavoriteRequestReducer,
  [Types.REMOVE_FAVORITE_SUCCESS]: removeFavoriteSuccessReducer,
  [Types.REMOVE_FAVORITE_FAILURE]: removeFavoriteFailureReducer,
})
