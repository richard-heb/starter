import {all, takeEvery, put} from 'redux-saga/effects';
import * as actions from '../actions/application';

export function* appLoading({payload}){
  const {loading} = payload;
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading
    }
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.APP_LOADING, appLoading)
  ])
}