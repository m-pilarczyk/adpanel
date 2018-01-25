import * as PublisherActions from './publisher.actions';
import  { siteInitialState } from '../../models/initial-state/site';

const initialState: any = {
  sites: [],
  lastEditedSite: siteInitialState
};

export function publisherReducers(state = initialState, action: PublisherActions.actions) {
  switch (action.type) {
    case PublisherActions.LOAD_SITES_SUCCESS:
      return {
        ...state,
        sites: action.payload
      };
    case PublisherActions.SAVE_LAST_EDITED_SITE:
      return {
        ...state,
        lastEditedSite:  Object.assign({}, action.payload)
      };
    case PublisherActions.ADD_SITE_TO_SITES:
      return {
        ...state,
        sites: [...state.sites, action.payload]
      }
    default:
      return state;
  }
}
