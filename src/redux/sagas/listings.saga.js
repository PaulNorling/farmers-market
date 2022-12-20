import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListings() {
    console.log('fetchListings!')
    try {
        const listings = yield axios.get('/api/listing');
        console.log('listings.saga GET', listings.data)
        yield put ({ type: 'SET_LISTINGS', payload: listings.data})
    } catch {
        console.log('get all error');
    }
}

function* listingsSaga() {
    yield takeLatest('FETCH_LISTINGS', fetchListings)
}

export default listingsSaga;