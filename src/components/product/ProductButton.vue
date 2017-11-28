<template>
  <v-layout>
    <v-btn v-if="isAdding" @click="addToCart">
      <v-icon>shopping_cart</v-icon>
      Add to Cart
    </v-btn>
    <v-btn v-else class="danger" @click="removeFromCart(product._id)">
      <v-icon>remote_shopping_cart</v-icon>
      Remove from Cart
    </v-btn>
  </v-layout>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'
  export default {
    props: ['product'],
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      isAdding () {
        return this.cart.indexOf(this.product) < 0
      }
    },
    methods: {
      addToCart () {
        this.$store.commit(ADD_TO_CART, this.product)
      },
      removeFromCart (id) {
        this.$store.commit(REMOVE_FROM_CART, id)
      }
    }
  }
</script>
