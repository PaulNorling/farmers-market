import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//delete icon toggle
function* addFavorite(action) {
    console.log('addFavoriteSaga', action.payload)
    try{
        yield axios.post(`/api/favorite`, action.payload)
        yield put ({type: 'FETCH_FAVORITE', payload: action.payload.listings_id})
    }catch {
        console.log('FAV error');
    }
}

function* fetchFavorite(action) {
    console.log('fetchFavorite', action.payload)
    try{
        const favorites = yield axios.get(`/api/favorite/${action.payload}`)
        console.log('fetchFavorites', favorites.data)
        yield put ({ type: 'SET_FAVORITES', payload: favorites.data})
    }catch {
        console.log('FAV GET error');
    }
}
//favorite icon toggle
function* deleteFavorite(action) {
    console.log('deleteFav', action.payload)
    try{
        yield axios.delete(`/api/favorite/${action.payload}`);
        // yield put ({type: 'FETCH_FAVORITES_BY_USER'})
        yield put ({type: 'FETCH_FAVORITE', payload: action.payload})
    }catch {
        console.log('delete error');
    }
}

function* fetchFavoritesByUser() {
    try{
        const favorites = yield axios.get(`/api/favorite`)
        console.log('fetchByUserFavorites', favorites.data)
        yield put ({ type: 'SET_USER_FAVORITES', payload: favorites.data})
    }catch {
        console.log('fetchFavoritesByUser error');
    }
}

function* deleteFavoriteFromList(action) {
    console.log('deleteFav', action.payload)
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