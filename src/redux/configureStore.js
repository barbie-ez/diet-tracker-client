import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 8000 // the port your remotedev server is running at
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
