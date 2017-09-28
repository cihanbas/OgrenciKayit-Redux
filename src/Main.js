import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from "./LoginForm";
import reduxThunk from 'redux-thunk';

export default class Main extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDlfZ71rWcSjdCRkE7y_IGWsgBOWvhRaVs',
            authDomain: 'ogrencikayit-32ae1.firebaseapp.com',
            databaseURL: 'https://ogrencikayit-32ae1.firebaseio.com',
            projectId: 'ogrencikayit-32ae1',
            storageBucket: 'ogrencikayit-32ae1.appspot.com',
            messagingSenderId: '364417382182'
        })
    }

    render() {
        const store=createStore(reducers,{},applyMiddleware(reduxThunk));
        return (
            <Provider store={store} >
                <LoginForm/>
            </Provider>
        );
    }
}



