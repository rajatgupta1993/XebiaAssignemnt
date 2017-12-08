import * as actionTypes from '../common/constants';

const initialState = {
    searchKey: '',
    totalHits: 0,
    apiCountArray: [],

};

export default function(state = initialState, action) {
    switch (action.type) {

        case actionTypes.INCREMENT_API_HITS_COUNTER:
            return Object.assign({}, state, {
                searchKey: ++state.totalHits,
            });

        case actionTypes.ADD_API_TIMESTAMP:
            return Object.assign({}, state, {
                apiCountArray: state.apiCountArray.concat(action.data),
            });

        case actionTypes.CLEAR_API_COUNTER:
            return Object.assign({}, state, {
                totalHits: 0,
                apiCountArray:[],
            });

        case actionTypes.SET_SEARCH_HITS:
            return Object.assign({}, state, {
                totalHits: action.hits,
            });

        default:
            return state;
    }
}