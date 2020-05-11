export const HOME_PAGE_VIEWED = '[ui] HOME_PAGE_VIEWED';
export const SHOW_LOADER = '[ui] SHOW_LOADER';
export const HIDE_LOADER = '[ui] HIDE_LOADER';

export const homePageViewed = {
  type: HOME_PAGE_VIEWED
}

type loadingAction = {
  type: string;
}
export const showLoader = {
  type: SHOW_LOADER,
}
export const hideLoader = {
  type: HIDE_LOADER,
}

export type uiReducerActions = loadingAction;