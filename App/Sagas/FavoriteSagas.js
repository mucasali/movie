
import { call, put, select } from 'redux-saga/effects'
import FavoriteActions, { FavoriteSelectors } from '../Redux/FavoriteRedux'
import { DropDownHolder } from '../Components'
import {API_KEY} from '../Constans/Data'

export function * getFavorite ({reset}) {

}

export function * addFavorite ({movie}) {
  try {
    const favorite = yield select(FavoriteSelectors.favorite)
    const data = [...favorite.data]
    const indexOf = data.indexOf( mov => mov.id == movie.id)

    if (indexOf < 1) {
      data.push(movie)
      yield put(FavoriteActions.addFavoriteSuccess(data))
    } else {
      yield put(FavoriteActions.addFavoriteFailure('Add Favorite Failure'))
    }

  } catch (err) {
    console.tron.log('ERROR addFavorite ', err.message)
    yield put(FavoriteActions.addFavoriteFailure('Add Favorite Error'))
  }
}

export function * removeFavorite ({movieId}) {
  try {
    const favorite = yield select(FavoriteSelectors.favorite)
    const data = [...favorite.data]
    const indexOf = data.indexOf( mov => mov.id == movieId)

    if (indexOf > 1) {
      data.splce(indexOf, 1)
      yield put(FavoriteActions.removeFavoriteSuccess(data))
    } else {
      yield put(FavoriteActions.removeFavoriteFailure('Remove Favorite Failure'))
    }

  } catch (err) {
    console.tron.log('ERROR addFavorite ', err.message)
    yield put(FavoriteActions.removeFavoriteFailure('Remove Favorite Error'))
  }
}

export function * getPopular (api, {reset}) {

  try {
    const popular = yield select(FavoriteSelectors.popular)
    const res = yield call(api.getPopular, {"api_key": API_KEY, page: popular.page})
    const { ok, data } = res
    console.tron.log('getFavorite.res ', res)
    if (ok) {
      const {page, results, total_pages} = data
      let loadMore = page < total_pages
      yield put(FavoriteActions.getPopularSuccess(results, page+1, loadMore))
    } else {
      const message = data.message ? data.message : 'Get Favorite Failed'
      DropDownHolder.alert('warn', "Get Favorite", message)
      yield put(FavoriteActions.getPopularFailure(message))
    }
  } catch(err) {
    console.tron.log('ERROR getFavorite.err ', err.message)
    DropDownHolder.alert('warn', "Get Favorite", err.message)
    yield put(FavoriteActions.getPopularFailure('Get Favorite Failure'))
  }

}
