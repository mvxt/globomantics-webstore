export const productGetters = {
  // All products
  products: (state) => {
    return state.products
  },
  // Get Product by ID
  product: (state) => id => {
    if (state.products.length > 0) {
      return state.products.filter(p => p._id === id)[0]
    } else {
      return state.product
    }
  }
}
