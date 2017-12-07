import { call, put, takeEvery, all, take, race, select, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../common/constants';
import { getData, getFilteredData, getLoginData } from '../common/api';
import * as actions from '../actions/actions';
//import 'regenerator-runtime/runtime';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';

export function* fetchFilteredData(action) {
  try {
  
    const data = yield call(getFilteredData, action.id)
    yield put(actions.getFilteredDataSuccess(data))
    // let totalHits = JSON.parse(window.localStorage.getItem('totalHits'))
    // window.localStorage.setItem('totalHits', JSON.stringify(totalHits+1))
   // yield put(actions.setSearchHits( totalHits + 1)) 
  } catch (error) {
    yield put(actions.getFilteredDataFailure(error.message))
  }
}
export function* checkLoginData(action) {
 try {
    const data = yield call(getLoginData, action.username);
    yield put(actions.loginDataSuccess(data));
 } catch (error) {
    yield put(actions.loginDataFailure(error.message))
 }
}

export function* watchFetchAsync() {
  yield takeEvery(actionTypes.LOGIN_DATA_REQUEST, checkLoginData)
  yield takeLatest(actionTypes.GET_FILTERDDATA_REQUEST, fetchFilteredData)
}

export function* rootSaga() {
  yield all([watchFetchAsync()])
}
