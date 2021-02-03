import { combineReducers } from 'redux';
import commentsReducer from './comments/reducer';
import postsReducer from './posts/reducer';

const rootReducer = () => combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
});

export default rootReducer;
