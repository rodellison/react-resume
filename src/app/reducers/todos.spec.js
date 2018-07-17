import todos from './todos';
import {CHANGE_PAGE} from '../constants/ActionTypes';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos({
        thePageToPresent: 'about',
        pageList: [
          {name: 'resume', id: 1},
          {name: 'contact', id: 2},
          {name: 'experience', id: 3},
          {name: 'projects', id: 4},
          {name: 'about', id: 5}
        ]
      }, {})
    ).toEqual(
      {
        thePageToPresent: 'about',
        pageList: [
          {name: 'resume', id: 1},
          {name: 'contact', id: 2},
          {name: 'experience', id: 3},
          {name: 'projects', id: 4},
          {name: 'about', id: 5}
        ]
      }
   );
  });

  it('should handle changePage to projects', () => {
    expect(
      todos([
        {
          thePageToPresent: 'about',
          pageList: [
            {name: 'resume', id: 1},
            {name: 'contact', id: 2},
            {name: 'experience', id: 3},
            {name: 'projects', id: 4},
            {name: 'about', id: 5}
          ]
        }], {
          type: CHANGE_PAGE,
          text: 'projects'
        })
    ).toEqual(
      {
        thePageToPresent: 'projects',
        pageList: [
          {name: 'resume', id: 1},
          {name: 'contact', id: 2},
          {name: 'experience', id: 3},
          {name: 'projects', id: 4},
          {name: 'about', id: 5}
        ]
      }
    );
  });
});
