import { 
    BOOKS_SEARCH_SUCCESS,
    QUERY_UPDATE,
    BOOKS_SEARCH_FAILURE
} from '../actions/types';

const INITIAL_STATE = {query: '', search: []}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case BOOKS_SEARCH_SUCCESS:
            console.log('search action: ', action);
            return {...state, search: action.payload};
        case BOOKS_SEARCH_FAILURE:
            console.log('action: ', action);
            return {...state, search: action.payload};
        case QUERY_UPDATE:
            return {...state, query: action.payload};
        default:
            return state;
    }
};
