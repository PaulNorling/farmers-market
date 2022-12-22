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

function* fetchByUser() {
    try{
        const userListings = yield axios.get('/api/listing/user');
        console.log('fetchByUser saga', userListings.data)
        yield put ({ type: 'SET_USER_LISTINGS', payload: userListings.data})
    }catch {
        console.log('fetchByUser error');
    }
}

function* fetchDetail(action) {
    try{
        const detail = yield axios.get(`/api/listing/detail/${action.payload}`);
        console.log('fetchDetail', detail.data);
        yield put ({ type: 'SET_DETAIL', payload: detail.data})
    }catch {
        console.log('fetchDetail error');
    }
}

function* deleteListing(action){
    console.log(action.payload)
    try{
        yield axios.delete(`/api/listing/${action.payload}`);
        yield fetchByUser();
    }catch {
        console.log('delete error');
    }
}

function* listingsSaga() {
    yield takeLatest('FETCH_LISTINGS', fetchListings);
    yield takeLatest('ADD_LISTING', addListing);
    yield takeLatest('FETCH_LISTINGS_BY_USER', fetchByUser);
    yield takeLatest('FETCH_DETAIL', fetchDetail);
    yield takeLatest('DELETE_LISTING', deleteListing);

}

export default listingsSaga;