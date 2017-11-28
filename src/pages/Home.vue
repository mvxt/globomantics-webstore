<!-- ./src/components/Home.vue -->
<template>
  <v-layout>
    <product-list></product-list>
  </v-layout>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    components: {
      'product-list': ProductList
    }
  }
</script>
