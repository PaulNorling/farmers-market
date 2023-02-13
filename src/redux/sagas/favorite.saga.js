import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//delete icon toggle
function* addFavorite(action) {
    try{
        yield axios.post(`/api/favorite`, action.payload)
        yield put ({type: 'FETCH_FAVORITE', payload: action.payload.listings_id})
    }catch {
        console.log('FAV error');
    }
}

function* fetchFavorite(action) {
    try{
        const favorites = yield axios.get(`/api/favorite/${action.payload}`)
        yield put ({ type: 'SET_FAVORITES', payload: favorites.data})
    }catch {
        console.log('FAV GET error');
    }
}
//favorite icon toggle
function* deleteFavorite(action) {
    try{
        yield axios.delete(`/api/favorite/${action.payload}`);
        yield put ({type: 'FETCH_FAVORITE', payload: action.payload})
    }catch {
        console.log('delete error');
    }
}

function* fetchFavoritesByUser() {
    try{
        const favorites = yield axios.get(`/api/favorite`)
        yield put ({ type: 'SET_USER_FAVORITES', payload: favorites.data})
    }catch {
        console.log('fetchFavoritesByUser error');
    }
}

function* deleteFavoriteFromList(action) {
    try{
        yield axios.delete(`/api/favorite/${action.payload}`);
        yield put ({type: 'FETCH_FAVORITES_BY_USER'})
    }catch {
        console.log('delete error');
    }
}

function* favoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest('FETCH_FAVORITE', fetchFavorite);
    yield takeLatest('DELETE_FAVORITE', deleteFavorite);
    yield takeLatest('FETCH_FAVORITES_BY_USER', fetchFavoritesByUser);
    yield takeLatest('DELETE_FAVORITE_FROM_LIST', deleteFavoriteFromList);

}

export default favoriteSaga;