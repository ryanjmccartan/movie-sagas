import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import {takeEvery, put} from 'redux-saga/effects';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMovies)
    yield takeEvery ('FETCH_GENRE', getGenre)
    yield takeEvery ('EDIT_MOVIE', editMovie)
}

function* editMovie(action) {
    try{
        console.log('in editMovie');
        yield axios.put('/movies', action.payload);
        yield getMovies();
    } catch(error) {
        console.log("Error with put request", error);
    }
}

// GET genres function
function* getGenre(action) {
    try{
        const response = yield axios.get(`/movies/${action.payload}`);
        console.log(response.data);
        yield put({type: 'SET_GENRES', payload: response.data});
        console.log(action);
    } catch (error) {
        console.log("Error with GET request", error);
    }
}

// GET movies function
function* getMovies() {
    try{
        const response = yield axios.get('/movies');
        console.log(response.data);
        yield put({type: 'SET_MOVIES', payload: response.data});
    } catch (error) {
        console.log("Error with GET request", error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SINGLE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singleMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
