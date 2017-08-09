import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import MyReads from './components/MyReads';
import Search from './components/Search';
import './App.css';
import reducers from './reducers';

class BooksApp extends React.Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
