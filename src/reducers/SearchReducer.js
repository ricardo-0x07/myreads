import lodash from 'lodash';
import { 
    BOOKS_SEARCH_SUCCESS,
    QUERY_UPDATE,
    BOOKS_SEARCH_FAILURE
} from '../actions/types';

const INITIAL_STATE = {query: '', search: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOOKS_SEARCH_SUCCESS:
            return {...state, search: lodash.uniqBy(action.payload, 'id')};
        case BOOKS_SEARCH_FAILURE:
            return {...state, search: action.payload};
        case QUERY_UPDATE:
            return {...state, query: action.payload};
        default:
            return state;
    }
};
