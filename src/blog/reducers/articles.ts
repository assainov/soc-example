import Article from '../models/article';
import {
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_FETCH_FAILURE,
  ArticlesActions
} from '../actions/articles';

const articles: Article[] = [];

export const articlesReducer = (state = articles, action: ArticlesActions) => {
  switch (action.type) {
    case ARTICLES_FETCH_SUCCESS: {
      return action.payload;
    }
    case ARTICLES_FETCH_FAILURE: {
      return [];
    }
    default:
      return state;
  }
}