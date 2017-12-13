import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../common/constants';
import { getFilteredData, getLoginData } from '../common/api';
import * as actions from '../actions/actions';

export function* fetchFilteredData(action) {
    try {
        const timeStamp = new Date().getTime();
        yield put(actions.incrementApiHitsCounter());
        yield put(actions.addApiTimestamp(timeStamp));
        const data = yield call(getFilteredData, action.id);
        yield put(actions.getFilteredDataSuccess(data));
    } catch (error) {
        yield put(actions.getFilteredDataFailure(error.message));
    }
}
export function* checkLoginData(action) {
    try {
        const data = yield call(getLoginData, action.username);
        yield put(actions.loginDataSuccess(data));
    } catch (error) {
        yield put(actions.loginDataFailure(error.message));
    }
}

export function* watchFetchAsync() {
    yield takeEvery(actionTypes.LOGIN_DATA_REQUEST, checkLoginData);
    yield takeLatest(actionTypes.GET_FILTERDDATA_REQUEST, fetchFilteredData);
}

export function* rootSaga() {
    yield all([watchFetchAsync()]);
}
