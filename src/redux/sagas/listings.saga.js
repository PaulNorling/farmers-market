import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListings() {
    console.log('fetchListings!')
}

function* listingsSaga() {
    yield takeLatest('FETCH_LISTINGS', fetchListings)
}

export default listingsSaga;