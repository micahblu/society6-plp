import * as Actions from '../../actions';
import {sortByTerms} from '../../../utils';

const defaultState = {
  title: '',
  cards: [],
  sortedCards: [],
  description: '',
  sortBy: [],
  loading: false,
  error: false
};

export default function (state = defaultState, action) {
  let sortTerms;
  switch (action.type) {
    case Actions.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case Actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cards: action.payload.cards,
        description: action.payload.description,
        title: action.payload.title
      };
    case Actions.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case Actions.ADD_SORT_TERM:
      sortTerms = state.sortBy.includes(action.payload)
        ? state.sortBy
        : [...state.sortBy, action.payload];
      return {
        ...state,
        sortBy: sortTerms,
        sortedCards: action.payload in state.sortBy
          ? state.sortedCards
          : sortByTerms(sortTerms, state.cards, 'product', 'ASC')
      };
    case Actions.REMOVE_SORT_TERM:
      sortTerms = state.sortBy.filter(term => term !== action.payload);
      return {
        ...state,
        sortBy: sortTerms,
        sortedCards: sortByTerms(sortTerms, state.cards, 'product', 'ASC')
      };
    default:
      return state;
  }
}