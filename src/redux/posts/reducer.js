// @ts-check
import actions from './actions';
import { createReducer } from '../utils';

/**
 * @type {{
 *    items: { id: number, title: string, body: string, comments: number[] }[] 
 * }}
 */
const initialState = {
  items: [],
};

const postsReducer = createReducer(initialState)({

  [actions.ADD_POST]: (state, action) => {
    const { title, body } = action.payload;
    state.items.push({ title, body, id: state.items.length, comments: [], });
  },

  [actions.ADD_COMMENT]: (state, action) => {
    const { postId, commentId } = action.payload;
    const post = state.items.find((p) => p.id === postId);
    post.comments.push(commentId);
  },

});

export default postsReducer;