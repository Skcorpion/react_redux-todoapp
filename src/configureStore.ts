import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';

export default () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }, 1000)
  );

  return store;
};
