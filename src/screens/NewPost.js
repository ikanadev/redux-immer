import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Markdown from 'react-markdown';

import { useInput } from '../hooks';
import { createNewPost } from '../redux/posts/operations';

import styles from './NewPost.module.css';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, onTitle] = useInput('')
  const [body, onBody] = useInput('')
  
  const savePost = () => {
    dispatch(createNewPost(title, body));
    history.goBack();
  }
  return (
    <div className={styles.root}>
      <div>
        <p onClick={() => history.goBack()}>Volver</p>
        <p>Title</p>
        <input rows="25" value={title} onChange={onTitle} />
        <p>Body</p>
        <textarea rows="25" value={body} onChange={onBody} />
        <button onClick={savePost}>
          Save
        </button>
      </div>
      <div>
        <Markdown>
          {body}
        </Markdown>
      </div>
    </div>
  )
}

export default NewPost;