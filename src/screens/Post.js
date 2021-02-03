import Markdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';

import { useInput } from '../hooks';
import { addComment } from '../redux/comments/operations'

import styles from './Post.module.css';

const Post = () => {
  const [name, onName, setName] = useInput('')
  const [commentText, onCommentText, setCommentText] = useInput('')
  
  const history = useHistory()

  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(
    (state) => state.posts.items.find((p) => p.id === +id)
  )
  const comments = useSelector(
    (state) => state.comments.items
  )
  
  const saveComment = () => {
    dispatch(addComment(post.id, name, commentText))
    setName('')
    setCommentText('')
  }
  
  const goBack = () => {
    history.goBack()
  }

  if (!post) {
    return <Redirect to="/" />;
  }
  const postComments = comments.filter((c) => post.comments.indexOf(c.id) !== -1)
  return (
    <div className={styles.root}>
      <p onClick={goBack}>Back</p>
      <h1>{post.title}</h1>
      <Markdown>
        {post.body}
      </Markdown>
      <h2>All comments</h2>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p>
            <b>{comment.user}: </b>
            {comment.text}
          </p>
        </div>
      ))}
      <br />
      <h3>New comment</h3>
      <p>Name</p>
      <input value={name} onChange={onName} />
      <p>Comment</p>
      <input value={commentText} onChange={onCommentText} />
      <button onClick={saveComment}>Comment</button>
    </div>
  )
}

export default Post;