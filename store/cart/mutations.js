
export default  {
  ADD_TO_CART(state, item) {
    state.items.push(item)
  },

  CLEAR_CART(state) {
    state.items = [];
  },

  REMOVE_ITEM(state, item) {
    state.items.splice(state.indexOf(item), 1);
  }
}
