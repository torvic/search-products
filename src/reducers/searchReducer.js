import TYPES from '../actions/searchActions';

export const searchInitialState = {
  products: [],
  filteredProducts: [],
  showFilteredProducts: false,
  searchInput: '',
  errors: {},
};

export function searchReducer(state, action) {
  switch (action.type) {
    case TYPES.GET_DATA:
      return {
        ...state,
        products: action.payload.map((product) => product),
      };
    case TYPES.UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case TYPES.FILTER_BY_SKU:
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          const productSku = product.sku.toLowerCase();
          return productSku === state.searchInput.toLowerCase();
        }),
      };
    case TYPES.VERIFY_VALIDATION_INPUT:
      return {
        ...state,
        errors: action.payload,
      };
    case TYPES.SHOW_FILTERED_PRODUCTS:
      return {
        ...state,
        showFilteredProducts: action.payload,
      };
    case TYPES.RESET_INPUT:
      return {
        ...state,
        searchInput: '',
      };

    default:
      return state;
  }
}
