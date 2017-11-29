import Vue from 'vue'
import Vuex from 'vuex'
import { productActions } from './actions'
import { productGetters } from './getters'
import { productMutations, cartMutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // Purchased items
    cart: [],
    // AJAX loader
    showLoader: false,
    // Selected product
    product: {},
    // All Products
    products: []
  },
  // Getters
  getters: Object.assign({}, productGetters),
  // Mutations
  mutations: Object.assign({}, productMutations, cartMutations),
  // Actions
  actions: Object.assign({}, productActions)
})

