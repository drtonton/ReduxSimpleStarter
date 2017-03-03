import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({ // any keys specified here become keys in the global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
