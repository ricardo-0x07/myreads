import { 
    BOOKS_FETCH_SUCCESS,
    BOOK_SAVED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    console.log('book reducer action', action);
    switch (action.type) {
        case BOOKS_FETCH_SUCCESS:
            console.log('BOOKS_FETCH_SUCCESS action: ', action);
            return action.payload;
        case BOOK_SAVED_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
