<template>
  <product-form @save-product="addProduct" :product="product">
  </product-form>
</template>

<script>
  import ProductForm from '@/components/product/ProductForm.vue'
  export default {
    components: {
      'product-form': ProductForm
    },
    data () {
      return {
        product: {
          name: '',
          price: '',
          upc: '',
          image: '',
          description: ''
        }
      }
    },
    methods: {
      addProduct () {
        this.$store.dispatch('addProduct', this.product)
      }
    }
  }
</script>
