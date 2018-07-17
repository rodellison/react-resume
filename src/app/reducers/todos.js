import {CHANGE_PAGE} from '../constants/ActionTypes';
import * as ContentPageType from '../constants/ContentPageTypes';

const sitePages = [
  {name: ContentPageType.RESUME, id: 1},
  {name: ContentPageType.CONTACT, id: 2},
  {name: ContentPageType.EXPERIENCE, id: 3},
  {name: ContentPageType.PROJECTS, id: 4},
  {name: ContentPageType.ABOUT, id: 5}
];

const initialState = {
  thePageToPresent: 'about',
  pageList: sitePages
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      {
        return {
          thePageToPresent: action.text,
          pageList: sitePages
        };
      }
    default:
      return state;
  }
}
