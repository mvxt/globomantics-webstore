<template>
  <product-form @save-product="addProduct" :product="product">
  </product-form>
</template>

<script>
  import ProductForm from '@/components/product/ProductForm.vue'
  import {
    ADD_PRODUCT
  } from '../../store/mutation-types'
  export default {
    components: {
      'product-form': ProductForm
    },
    data () {
      return {
        product: {
          name: 'Blah',
          price: 'Blah',
          upc: 'Blah',
          image: 'Blah',
          description: 'Blah'
        }
      }
    },
    methods: {
      addProduct (product) {
        this.$store.commit(ADD_PRODUCT, product)
      }
    }
  }
</script>
