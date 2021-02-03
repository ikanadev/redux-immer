// @ts-check
import actions from './actions';
import { createReducer } from '../utils';

const initialState = {
  /** @type {{ id: number, user: string, text: string }[]} */
  items: []
};

const commentsReducer = createReducer(initialState)({

  [actions.ADD_COMMENT]: (state, action) => {
    const { comment, user } = action.payload;
    state.items.push(
      { id: state.items.length, user, text: comment }
    );
  },

});

export default commentsReducer;
