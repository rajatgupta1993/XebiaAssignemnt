import * as actionTypes from '../common/constants';

const initialState = {
    planets: [],
    filteredPlanets: [],
    people: null,
    isFetching: false,
    errorMessage: '',
};

export default function(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            );

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                planets: action.data,
            } );

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            });

        case actionTypes.GET_FILTERDDATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case actionTypes.GET_FILTERDDATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                filteredPlanets: action.data,
            });

        case actionTypes.GET_FILTERDDATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            });

        case actionTypes.LOGIN_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case actionTypes.LOGIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                people: action.data,
            } );

        case actionTypes.LOGIN_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            });

        default:
            return state;
    }
}
