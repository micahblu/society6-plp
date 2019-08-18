import * as Actions from '../../actions';

const defaultState = {
  title: '',
  cards: [],
  sortedCards: {
    price: [],
    promote: []
  },
  description: '',
  sortedBy: '', // enum('price', 'promote')
  loading: false,
  error: false
};

export default function(state = defaultState, action) {
  switch(action.type) {
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
    case Actions.SORT_BY_PRICE_ASC:
      return {
        ...state,
        sortedBy: 'price',
        sortedCards: {
          ...state.sortedCards,
          price: state.sortedCards.price.length
            ? state.sortedCards.price
            : state.cards.slice().sort((a, b) => a.product.price - b.product.price)
        }
      };
    case Actions.SORT_BY_PROMOTES_ASC:
      return {
        ...state,
        sortedBy: 'promote',
        sortedCards: {
          ...state.sortedCards,
          promote: state.sortedCards.promote.length
            ? state.sortedCards.promote
            : state.cards.slice().sort((a, b) => a.product['promote_cnt'] - b.product['promote_cnt'])
        }
      };
    case Actions.RESET_SORT:
      return {
        ...state,
        sortedBy: ''
      };
    default:
      return state;
  }
}