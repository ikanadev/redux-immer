import { put, select } from 'redux-saga/effects';
import { addPostComment } from '../posts/operations';

export function* addCommentSaga({ payload }) {
  const state = yield select()
  const { postId } = payload;
  yield put(addPostComment(postId, state.comments.items.length - 1))
}