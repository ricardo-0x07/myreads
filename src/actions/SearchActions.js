import firebase from 'firebase';
// import { Actions }  from 'react-router-dom';
import { 
    BOOKS_SEARCH_SUCCESS,
    QUERY_UPDATE,
    BOOKS_SEARCH_FAILURE
} from './types';
import * as BooksAPI from '../BooksAPI';


export const booksSearch = ({ query, max }) => {
    return (dispatch) => {
        var _that = this;
        BooksAPI
        .search( query, max )
            .then(response => {
                console.log('response', response);
                // response = typeof response
                if (!response['error']) {
                    dispatch({ type: BOOKS_SEARCH_SUCCESS, payload: response })
                } else {
                    dispatch({ type: BOOKS_SEARCH_SUCCESS, payload: [] })
                }
                
            })
            .catch(error => {
                console.log('search error', error);
                dispatch({ type: BOOKS_SEARCH_FAILURE, payload: [] })
            });
    };
};

export const queryUpdate = ({ value }) => {
    return {
        type: QUERY_UPDATE,
        payload: value
    };
};
