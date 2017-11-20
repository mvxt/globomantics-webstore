<template>
  <product-form @save-product="addProduct" :model="product">
  </product-form>
</template>

<script>
  import ProductForm from '@/components/ProductForm.vue'
  export default {
    components: {
      'product-form': ProductForm
    },
    data () {
      return {
        product: {}
      }
    },
    methods: {
      addProduct (product) {
        console.log('product', product)
      }
    }
  }
</script>
