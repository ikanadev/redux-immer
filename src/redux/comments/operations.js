// @ts-check
import actions from './actions';

/** @typedef {import('../utils').Action} Action */
/** @type {(postId: number, user: string, comment: string ) => Action} */
export const addComment = (postId, user, comment) => (
  {
    type: actions.ADD_COMMENT,
    payload: { postId, user, comment },
  }
);