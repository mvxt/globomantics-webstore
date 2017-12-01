<template>
  <v-card style="height: 100%" tile>
    <router-link :to="'/details/' + product._id">
      <v-card-media :src="product.image" alt="" height="240px"></v-card-media>
      <v-card-title primary-title style="height: 25%">
        <v-layout row>
          <h6 class="mb-0">{{ product.name }}</h6>
        </v-layout>
        <v-layout row>
          {{ product.description }}
        </v-layout>
      </v-card-title>
    </router-link>
    <v-card-actions class="mb-2">
      <v-btn v-if="isAdding" @click="addToCart">
        <v-icon class="mr-1">add_shopping_cart</v-icon>
        <span class="hidden-md-and-down mt-1">Add to Cart</span>
      </v-btn>
      <v-btn v-else @click="removeFromCart(product._id)">
        <v-icon class="mr-1">remove_shopping_cart</v-icon>
        <span class="hidden-md-and-down mt-1">Remove from Cart</span>
      </v-btn>
      <v-spacer></v-spacer>
      <span class="subheading hidden-md-and-down">$ {{ product.price }}</span>
      <span class="body-2 hidden-lg-and-up">$ {{ product.price }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../../store/mutation-types'

  export default {
    name: 'product-item',
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
