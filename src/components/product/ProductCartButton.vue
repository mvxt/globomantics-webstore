<template>
  <v-btn v-if="isAdding" @click="addToCart">
    <v-icon class="mr-1">add_shopping_cart</v-icon>
    <span class="hidden-md-and-down mt-1" color="primary">Add to Cart</span>
  </v-btn>
  <v-btn v-else @click="removeFromCart">
    <v-icon class="mr-1">remove_shopping_cart</v-icon>
    <span class="hidden-md-and-down mt-1" color="primary">Remove from Cart</span>
  </v-btn>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'
  export default {
    name: 'product-cart-button',
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      isAdding () {
        return this.cart.indexOf(this.product._id) < 0
      }
    },
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product._id)
      },
      removeFromCart () {
        this.$store.commit(REMOVE_FROM_CART, this.product._id)
      }
    }
  }
</script>
