<template>
  <v-container fluid style="min-height: 0;" grid-list-lg>
    <v-layout row wrap>
      <v-flex xs4 v-for="(product, _id) in products" :key="_id">
        <product-item :product="product"></product-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('products')
      }
    },
    computed: {
      products () {
        return this.$store.getters.products
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>
