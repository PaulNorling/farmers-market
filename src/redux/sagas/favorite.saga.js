import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite(action) {
    console.log('addFavoriteSaga', action.payload)
    try{
        yield axios.post(`/api/favorite`, action.payload)
    }catch {
        console.log('FAV error');
    }
}

function* fetchFavorite(action) {
    console.log('fetchFavorite', action.payload)
    try{
        yield axios.get(`/api/favorite`, action.payload)
    }catch {
        console.log('FAV GET error');
    }
}

function* favoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest('FETCH_FAVORITE', fetchFavorite)
}

export default favoriteSaga;