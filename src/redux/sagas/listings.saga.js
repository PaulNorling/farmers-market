import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchListings() {
    console.log('fetchListings!')
    try {
        const listings = yield axios.get('/api/listing');
        console.log('listings.saga GET', listings.data)
        yield put ({ type: 'SET_LISTINGS', payload: listings.data})
    } catch {
        console.log('get all error listing.saga');
    }
}

function* addListing(action) {
    console.log('addListing', action.payload)
    try {
        yield axios.post('/api/listing', action.payload)
    }catch {
        console.log('post error listing.saga');
    }
}

function* listingsSaga() {
    yield takeLatest('FETCH_LISTINGS', fetchListings);
    yield takeLatest('ADD_LISTING', addListing);
}

export default listingsSaga;