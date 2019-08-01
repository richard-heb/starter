import {all} from 'redux-saga/effects';
import applicationSagas from './application';

export default function* rootSaga(){
  yield all([
    applicationSagas()
  ])
}