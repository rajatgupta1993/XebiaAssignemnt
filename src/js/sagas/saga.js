import { call, put, takeEvery, all, take, race, select, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../common/constants';
import { getData, getFilteredData, getLoginData } from '../common/api';
import * as actions from '../actions/actions';
//import 'regenerator-runtime/runtime';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';
export function* fetchData() {
  try {
    const data = yield call(getData)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailure(error.message))
  }

}

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
    AsyncStorage.setItem("ISLOGIN","true");
    yield put(actions.loginDataSuccess(data))
    
 } catch (error) {
    yield put(actions.loginDataFailure(error.message))
 }
}

//backgroundTask
export function* watchAndLog() {
  while (true) {
    yield take('*')
    yield select()
  }
}

export function* watchStartBackgroundTask() {
  while (true) {
    yield take('*')
    yield race({
      task: call(watchAndLog),
      cancel: take('CANCEL_TASK'),
    })
  }
}

export function* watchFetchAsync() {
  yield takeEvery(actionTypes.GET_DATA_REQUEST, fetchData)
  yield takeEvery(actionTypes.LOGIN_DATA_REQUEST, checkLoginData)
  yield takeLatest(actionTypes.GET_FILTERDDATA_REQUEST, fetchFilteredData)
}

export function* rootSaga() {
  yield all([watchFetchAsync()])
}
