import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import {Provider} from 'react-redux';

import './scss/app.scss';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action)=>{
    switch (action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,       
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}


const userReducer = (state = {
    name: 'Chris',
    age: 36
}, action)=>{
    switch (action.type){
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) =>{
    console.log("logged action:", action);
    next(action);
}

const store = createStore(
    combineReducers({
        math: mathReducer,
        user: userReducer
    }), 
    {}, 
    applyMiddleware(createLogger())
);

store.subscribe(()=>{
    //console.log("Store updated!", store.getState());
});



ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));