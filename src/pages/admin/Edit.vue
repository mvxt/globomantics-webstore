<template>
  <product-form @save-product="updateProduct" :product="this.product" :isEditing="true">
  </product-form>
</template>

<script>
  import ProductForm from '@/components/product/ProductForm.vue'
  export default {
    props: ['id'],
    components: {
      'product-form': ProductForm
    },
    computed: {
      product () {
        return Object.assign({}, this.$store.getters.product(this.id))
      }
    },
    methods: {
      updateProduct () {
        this.$store.dispatch('updateProduct', this.product)
      }
    }
  }
</script>
