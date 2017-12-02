<template>
  <v-container fluid>
    <product-details :product="product"></product-details>
  </v-container>
</template>

<script>
  import ProductDetails from '@/components/product/ProductDetails'
  export default {
    props: ['id'],
    components: {
      'product-details': ProductDetails
    },
    computed: {
      product () {
        return Object.assign({}, this.$store.getters.product(this.id))
      }
    }
  }
</script>
