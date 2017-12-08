import * as types from '../common/constants';

export const loginDataSuccess = (data) => ({ type: types.LOGIN_DATA_SUCCESS, data });
export const loginDataFailure = (message) => ({ type: types.LOGIN_DATA_FAILURE, message });
export const loginDataRequest = (username) => ({ type: types.LOGIN_DATA_REQUEST, username });
export const getFilteredDataSuccess = (data) => ({ type: types.GET_FILTERDDATA_SUCCESS, data });
export const getFilteredDataFailure = (message) => ({ type: types.GET_FILTERDDATA_FAILURE, message });
export const getFilteredDataRequest = (id) => ({ type: types.GET_FILTERDDATA_REQUEST, id });
export const incrementApiHitsCounter = () => ({ type: types.INCREMENT_API_HITS_COUNTER });
export const addApiTimestamp = (data) => ({ type: types.ADD_API_TIMESTAMP, data });
export const clearApiCounter = () => ({ type: types.CLEAR_API_COUNTER });
