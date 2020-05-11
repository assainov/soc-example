import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk'
import { requestArticles } from '../api/requestArticles';
import { apiPost } from '../api/requestArticles';
import { hideLoader } from '../../views/actions';

export const ARTICLES_START_FETCH = '[articles] START_FETCH';
export const ARTICLES_FETCH_SUCCESS = '[articles] FETCH_SUCCESS';
export const ARTICLES_FETCH_FAILURE = '[articles] FETCH_FAILURE';

export const startArticleFetching = {
  type: ARTICLES_START_FETCH
}

export type FetchArticlesAction<ReturnType = void> = ThunkAction<
  ReturnType,
  apiPost[],
  unknown,
  Action
>

export const fetchArticles = (): FetchArticlesAction => async (dispatch: Dispatch) => {
  let response;
  try {
    response = await requestArticles();
  }
  catch (error) {
    dispatch({
      type: ARTICLES_FETCH_FAILURE
    })
  }
  finally {
    dispatch({
      type: ARTICLES_FETCH_SUCCESS,
      payload: response?.data || []
    });
    dispatch(hideLoader);
  }
}

type ArticlesFetchSuccessAction = {
  type: string;
  payload: apiPost[]
}
type ArticlesFetchFailureAction = {
  type: string;
}

export type ArticlesActions = ArticlesFetchSuccessAction & ArticlesFetchFailureAction;