<!-- ./src/pages/Cart.vue -->
<template>
  <v-container fluid v-if="products.length > 0" key="items">
    <transition-group name="slide-x-transition" mode="out-in">
      <v-layout row v-for="(product, _id) in products" :key="_id" class="mt-2">
        <v-flex xs12>
          <product-details :product="product"></product-details>
        </v-flex>
      </v-layout>
      <v-layout row key="checkout">
        <v-spacer></v-spacer>
        <v-btn style="height: 50px" @click="">
          <v-badge overlay left overlap color="green">
            <v-icon slot="badge">check</v-icon>
            <v-icon>shopping_cart</v-icon>
          </v-badge>
          <span class="mt-1">Checkout</span>
        </v-btn>
      </v-layout>
    </transition-group>
  </v-container>
  <v-container fluid v-else key="else">
    <v-layout row>
      <v-flex xs12 class="text-xs-center">
        <v-card>
          <v-card-text>
            <span class="display-1" style="font-style: italic;">
              No items in your cart.
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProductDetails from '@/components/product/ProductDetails'
  export default {
    name: 'cart',
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    computed: {
      products () {
        console.log(this.cart)
        var products = []
        for (var i = 0; i < this.cart.length; i++) {
          var product = Object.assign({}, this.$store.getters.product(this.cart[i]))
          products.push(product)
        }
        return products
      }
    },
    components: {
      'product-details': ProductDetails
    }
  }
</script>
