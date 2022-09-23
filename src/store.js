import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bookingReducer } from './Reducers/bookingReducer';

const rootReducer = combineReducers({
  bookingReducer: bookingReducer,
});
const getBookedItems = localStorage.getItem('bookedItems');
const bookedItems = getBookedItems ? JSON.parse(getBookedItems) : [];

const initialState = {
  bookingReducer: { bookedItems: bookedItems },
};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
