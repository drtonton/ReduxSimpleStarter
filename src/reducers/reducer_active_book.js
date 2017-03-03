// state argument isn't application state, only the state
// that this reducer is responsible for
export default function(state = null, action) { // state = null syntax is ES6 for "if undefined, make null"
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}