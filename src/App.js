import React from 'react';
import {Link, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import * as BooksAPI from './BooksAPI';
import MyReads from './components/MyReads';
import Search from './components/Search';
import './App.css';
import reducers from './reducers';

class BooksApp extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      // showSearchPage: false
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCzp7ICSAbb-1UWsqTDSTyXVdxpnpRu-FE',
            authDomain: 'myreads-af0b6.firebaseapp.com',
            databaseURL: 'https://myreads-af0b6.firebaseio.com',
            projectId: 'myreads-af0b6',
            storageBucket: 'myreads-af0b6.appspot.com',
            messagingSenderId: '448920027263'
        });
    }

    render() {
        const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <div className="app">
                    <Route exact path="/" component={MyReads}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Provider>
        );
    }
}

export default BooksApp;
