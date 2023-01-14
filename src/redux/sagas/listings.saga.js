import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2'
import { func } from 'prop-types';




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
        // alert('Add New Listing Successful');
        Swal.fire({
            text: 'Success',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#1976d2',
          }).then((result) => {
            if (result.isConfirmed) {
                action.history.push('/yourListing');
            }})
    }catch {
        Swal.fire({
            // title: 'Error!',
            text: 'Error adding listing',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#1976d2',
          })
    }
}

function* fetchByUser() {
    try{
        const userListings = yield axios.get('/api/listing/user');
        yield put ({ type: 'SET_USER_LISTINGS', payload: userListings.data})
    }catch {
        console.log('fetchByUser error');
    }
}

function* fetchDetail(action) {
    try{
        const detail = yield axios.get(`/api/listing/detail/${action.payload}`);
        yield put ({ type: 'SET_DETAIL', payload: detail.data})
    }catch {
        console.log('fetchDetail error');
    }
}

function* deleteListing(action){
    try{
        yield axios.delete(`/api/listing/${action.payload}`);
        yield fetchByUser();
    }catch {
        console.log('delete error');
    }
}

function* editListing(action) {
    console.log('editListingsaga', action.payload)
    try{
        yield axios.put(`/api/listing/`, action.payload)
        Swal.fire({
            text: 'Success',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#1976d2',
          }).then((result) => {
            if (result.isConfirmed) {
                action.history.push('/yourListing');
            }})
    }catch {
        Swal.fire({
            // title: 'Error!',
            text: 'Error editing listing',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#1976d2',
          })
    }
}

function* searchListing(action) {
    console.log('SEARCH', action.payload)
    try{
        const searchResult = yield axios.get(`/api/listing/search/${action.payload}`);
        yield put ({ type: 'SET_SEARCH', payload: searchResult.data})
    }catch {
        console.log('SEARCH error');
    }
}

function* fetchListingsByZip() {
    console.log('fetchListingsByZip!')
    try {
        const listings = yield axios.get('/api/listing/zip');
        console.log('listings.saga GET', listings.data)
        yield put ({ type: 'SET_LISTINGS_BY_ZIP', payload: listings.data})
    } catch {
        console.log('get all error listing.saga');
    }
}

function* listingsSaga() {
    yield takeLatest('FETCH_LISTINGS', fetchListings);
    yield takeLatest('ADD_LISTING', addListing);
    yield takeLatest('FETCH_LISTINGS_BY_USER', fetchByUser);
    yield takeLatest('FETCH_DETAIL', fetchDetail);
    yield takeLatest('DELETE_LISTING', deleteListing);
    yield takeLatest('EDIT_LISTING', editListing);
    yield takeLatest('SEARCH_FETCH', searchListing);
    yield takeLatest('FETCH_LISTINGS_BY_ZIP', fetchListingsByZip);

}

export default listingsSaga;