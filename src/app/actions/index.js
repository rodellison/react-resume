import * as types from '../constants/ActionTypes';

export function changePage(text) {
  return {type: types.CHANGE_PAGE, text};
}

