import { fork, all } from 'redux-saga/effects';

import commentsWatchers from './comments/watchers';

export default function* rootSaga() {
  yield all([
    fork(commentsWatchers),
  ])
}