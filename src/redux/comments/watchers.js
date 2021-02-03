import { takeLatest } from 'redux-saga/effects';

import actions from './actions';
import { addCommentSaga } from './sagas';

export default function* watchRequest() {
  yield takeLatest(actions.ADD_COMMENT, addCommentSaga);
}