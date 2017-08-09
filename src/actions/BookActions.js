import { 
    BOOK_UPDATE,
    BOOKS_FETCH_SUCCESS,
    BOOK_SAVED_SUCCESS,
} from './types';
import * as BooksAPI from '../BooksAPI';

export const booksFetch = () => {
    return (dispatch) => {
        const _that = this;
        BooksAPI
            .getAll()
            .then(response => {
                dispatch({ type: BOOKS_FETCH_SUCCESS, payload: response })
            });
    }
};

export const bookUpdated = ({ book, shelf }) => {
    return dispatch => {
        const _that = this;
        BooksAPI
        .update(book, shelf)
        .then(() => {
            return BooksAPI.getAll();
        })
        .then(response => {
            dispatch({ type: BOOK_SAVED_SUCCESS, payload: response });
        });
    };
};

export const bookUpdate = ({ prop, value }) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};
