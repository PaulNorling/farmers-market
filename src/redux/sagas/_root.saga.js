import { all } from 'redux-saga/effects';
import listingsSaga from './listings.saga';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import favoriteSaga from './favorite.saga';


export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    listingsSaga(),
    favoriteSaga(),
  ]);
}
