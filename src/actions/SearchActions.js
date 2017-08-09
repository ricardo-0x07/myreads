import { 
    BOOKS_SEARCH_SUCCESS,
    QUERY_UPDATE,
    BOOKS_SEARCH_FAILURE
} from './types';
import * as BooksAPI from '../BooksAPI';


export const booksSearch = ({ query, max }) => {
    return dispatch => {
        const _that = this;
        BooksAPI
        .search(query, max)
            .then(response => {
                if(!response['error']) {
                    response = response.map(book => {
                        book.shelf = null;
                        return book;
                    });
                    dispatch({ type: BOOKS_SEARCH_SUCCESS, payload: response });
                } else {
                    dispatch({ type: BOOKS_SEARCH_SUCCESS, payload: [] });
                }
            })
            .catch(error => {
                dispatch({ type: BOOKS_SEARCH_FAILURE, payload: [] });
            });
    };
};

export const queryUpdate = ({ value }) => {
    return {
        type: QUERY_UPDATE,
        payload: value
    };
};
