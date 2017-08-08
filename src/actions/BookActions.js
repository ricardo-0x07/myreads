import firebase from 'firebase';
// import { Actions }  from 'react-router-dom';
import { 
    BOOK_UPDATE,
    BOOK_CREATE,
    BOOKS_FETCH_SUCCESS,
    BOOK_SAVED_SUCCESS,
    BOOK_DELETE_SUCCESS,
    BOOKS_SEARCH_SUCCESS
} from './types';
import * as BooksAPI from '../BooksAPI';

export const booksFetch = () => {
    return (dispatch) => {
        var _that = this;
        console.log('booksfetch this', this)
        BooksAPI
            .getAll()
            .then(response => {
                console.log('response', response);
                dispatch({ type: BOOKS_FETCH_SUCCESS, payload: response })
            });
    }
};

export const bookUpdated = ({ book, shelf }) => {
    
    return (dispatch) => {
        var _that = this;
        BooksAPI
        .update(book, shelf)
        .then((response) => {
            console.log('updated! response', response);
            return BooksAPI.getAll();
        })
        .then((response) => {
            console.log('updated -> fetch! response', response);
            dispatch({ type:  BOOK_SAVED_SUCCESS, payload: response  });
        });
    };
};

export const bookCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/books`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: BOOK_CREATE });
            // Actions.bookList({ type: 'reset' });
        });
    };
};

export const bookDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/books/${uid}`)
        .remove()
        .then(() => {
            console.log('removed!');
            // dispatch({ type:  BOOK_DELETE_SUCCESS });
            // Actions.bookList({ type: 'reset' });
        });
    };
};
export const bookUpdate = ({ prop, value }) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};
