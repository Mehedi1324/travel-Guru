export const addBookings =
  (from, to, date, time, adult, sitType, children, bookPackage) =>
  (dispatch, getState) => {
    var bookingInfo = {
      from: from,
      to: to,
      date: date,
      time: time,
      adult: Number(adult),
      sitType: Number(sitType),
      children: Number(children),
      bookPackage: Number(bookPackage),
    };
    dispatch({ type: 'ADD_BOOKING', payload: bookingInfo });
    localStorage.setItem(
      'bookedItems',
      JSON.stringify(getState().bookingReducer.bookedItems)
    );
  };

export const deleteFromCart = () => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART' });
  localStorage.setItem(
    'bookedItems',
    JSON.stringify(getState().bookingReducer.bookedItems)
  );
};
