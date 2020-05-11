import { Middleware } from 'redux';
import { HOME_PAGE_VIEWED, showLoader } from './actions';
import { startArticleFetching } from '../blog/actions/articles';

const viewHomeFlow: Middleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === HOME_PAGE_VIEWED) {
    dispatch(startArticleFetching);
    dispatch(showLoader);
  }
}

export default [viewHomeFlow]