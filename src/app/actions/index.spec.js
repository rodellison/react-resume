import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create CHANGE_PAGE action', () => {
    expect(actions.changePage('about')).toEqual({
      type: types.CHANGE_PAGE,
      text: 'about'
    });
  });
});
