import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MovieTypes } from '../Redux/MovieRedux'
import { FavoriteTypes } from '../Redux/FavoriteRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getPopular } from './MovieSagas'
import {
  getFavorite,
  addFavorite,
  removeFavorite
} from './FavoriteSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(MovieTypes.GET_POPULAR_REQUEST, getPopular, api),

    takeLatest(FavoriteTypes.GET_FAVORITE_REQUEST, getFavorite),
    takeLatest(FavoriteTypes.ADD_FAVORITE_REQUEST, addFavorite),
    takeLatest(FavoriteTypes.REMOVE_FAVORITE_REQUEST, removeFavorite),
  ])
}
