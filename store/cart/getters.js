export default  {
  COUNT(state) {
    return state.items.length;
  },

  ITEMS(state) {
    return state.items;
  },

  NORMAL_CHECKOUT(state) {
    return state.items.filter(item => !item.nebula);
  },

  ITEM: (state) => (uid) => {
    return state.items.find(cartItem => cartItem.uid === uid);
}
}
