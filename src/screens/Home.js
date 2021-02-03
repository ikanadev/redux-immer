import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  const history = useHistory();
  const { items } = useSelector((state) => state.posts)

  const goToPost = (postId) => () => {
    history.push(`/post/${postId}`)
  }
  
  const goToNewPost = () => {
    history.push('/newpost')
  }
  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <p>{item.title}</p>
          <button onClick={goToPost(item.id)}>Ver</button>
        </div>
      ))}  
      <button onClick={goToNewPost}>Create Post</button>
    </div>
  )
}

export default Home;