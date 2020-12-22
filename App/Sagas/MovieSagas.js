
import { call, put, select } from 'redux-saga/effects'
import MovieActions, { MovieSelectors } from '../Redux/MovieRedux'
import { DropDownHolder } from '../Components'
import {API_KEY} from '../Constans/Data'

export function * getPopular (api, {reset}) {

  try {
    const popular = yield select(MovieSelectors.popular)
    const res = yield call(api.getPopular, {
      "api_key": API_KEY,
      page: popular.page
    })
    const { ok, data } = res
    console.tron.log('getMovie.res ', res)
    if (ok) {
      const {page, results, total_pages} = data
      let loadMore = page < total_pages
      yield put(MovieActions.getPopularSuccess(results, page+1, loadMore))
    } else {
      const message = data.message ? data.message : 'Get Movie Failed'
      DropDownHolder.alert('warn', "Get Movie", message)
      yield put(MovieActions.getPopularFailure(message))
    }
  } catch(err) {
    console.tron.log('ERROR getMovie.err ', err.message)
    DropDownHolder.alert('warn', "Get Movie", err.message)
    yield put(MovieActions.getPopularFailure('Get Movie Failure'))
  }

}
