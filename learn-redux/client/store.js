import { createStore, compse } from 'redux';
import { synchHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
const defaultState = {
  posts,
  comments
};

export default const store = createStore(rootReducer, defaultState);

export const history = synchHistoryWithStore(browserHistory, store);
