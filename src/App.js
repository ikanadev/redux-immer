import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Post from './screens/Post';
import NewPost from './screens/NewPost';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/newpost">
        <NewPost />
      </Route>
    </Switch>
  );
}

export default App;
