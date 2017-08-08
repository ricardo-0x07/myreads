import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    books: BookReducer,
    search: SearchReducer
});

