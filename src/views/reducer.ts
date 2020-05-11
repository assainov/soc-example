import { uiReducerActions, SHOW_LOADER, HIDE_LOADER } from './actions';

const uiState = {
  loading: false
}

const uiReducer = (state = uiState, action: uiReducerActions) => {
  switch (action.type) {
    case SHOW_LOADER: {
      return {...state, loading: true};
    }
    case HIDE_LOADER: {
      return {...state, loading: false};
    }
    default:
      return state;
  }
}

export default {
  ui: uiReducer
}