import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import blogReducers from './blog/reducers';
import uiReducers from './views/reducer';
import blogMiddleware from './blog/middleware';
import uiMiddleware from './views/middleware';

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({...blogReducers, ...uiReducers});
export type RootState = ReturnType<typeof rootReducer>

export const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk, ...blogMiddleware, ...uiMiddleware),
    )
  )
}