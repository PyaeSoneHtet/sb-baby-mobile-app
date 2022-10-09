const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const CLEAR_PRODUCT = "CLEAR_PRODUCT";

const initialState = {
  carts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        carts: [action.payload.product, ...state.carts],
      };

    case DELETE_PRODUCT:
      const _filteredData = state.carts.filter(
        (_product) => _product.id != action.payload.product.id
      );
      return {
        ...state,
        carts: _filteredData,
      };

    case UPDATE_PRODUCT:
      const _updatedData = state.carts.map((_product) => {
        return _product.id == action.payload.product.id
          ? action.payload.product
          : _product;
      });
      return {
        ...state,
        carts: _updatedData,
      };

    case CLEAR_PRODUCT:
      return {
        ...state,
        carts: [],
      };

    default:
      return state;
  }
};

export const actions = {
  addNewProduct: (product) => {
    return {
      type: ADD_NEW_PRODUCT,
      payload: { product },
    };
  },

  deleteProduct: (product) => {
    return {
      type: DELETE_PRODUCT,
      payload: { product },
    };
  },

  updateProduct: (product) => {
    return {
      type: UPDATE_PRODUCT,
      payload: { product },
    };
  },
  clearProduct: () => {
    return {
      type: CLEAR_PRODUCT,
    };
  },
};
