import * as actionTypes from '../common/constants';

const initialState = { searchKey: '', totalHits:0 };

export default function(state = initialState, action) {
  switch (action.type) {

   case actionTypes.SET_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: action.searchKey,
            }
            )

        case actionTypes.CLEAR_SEARCH_KEY:
            return Object.assign({}, state, {
                searchKey: '',
            }
            )
        case actionTypes.CLEAR_SEARCH_HITS:
            return Object.assign({}, state, {
                totalHits: 0,
            }
            )
        case actionTypes.SET_SEARCH_HITS:
            return Object.assign({}, state, {
                totalHits: action.hits,
            }
            )
        default:
            return state;
    }
}