export const bookingReducer = (state = { bookedItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookedItems: [...state.bookedItems, action.payload],
      };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        bookedItems: [],
      };
    default:
      return state;
  }
};
