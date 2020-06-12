import algoliasearch from 'algoliasearch/lite'
export default {
  searchClient() {
    return algoliasearch(
      'RPYBR7B48O',
      'cdbaea1377f6eaed9fae3760cc7f8997'
    )
  },
  getSearchKeyword(state) {
    return state.searchKeyword
  }
}
