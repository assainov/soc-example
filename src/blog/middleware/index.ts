import { Middleware } from "redux"
import { ARTICLES_START_FETCH, ARTICLES_FETCH_SUCCESS, fetchArticles } from '../actions/articles';
import { transformArticles } from "./index.service";

const articleFetchFlow: Middleware = ({ dispatch }) => next => action => {
  if (action.type === ARTICLES_START_FETCH) {
    dispatch<any>(fetchArticles());
  }

  next(action);
}

const articleSuccessFlow: Middleware = ({ dispatch }) => next => (action) => {
  if (action.type === ARTICLES_FETCH_SUCCESS) {
    action.payload = transformArticles(action.payload);
  }

  next(action);
}

export default [articleFetchFlow, articleSuccessFlow]