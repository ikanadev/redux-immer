// @ts-check
import actions from './actions';

/** @typedef {import('../utils').Action} Action */

/** @type {(title: string, body: string) => Action} */
export const createNewPost = (title, body) => (
  {
    type: actions.ADD_POST,
    payload: { title, body },
  }
);

/** @type {(postId: number, commentId: number) => Action} */
export const addPostComment = (postId, commentId) => (
  {
    type: actions.ADD_COMMENT,
    payload: {
      postId, commentId,
    }
  }
);