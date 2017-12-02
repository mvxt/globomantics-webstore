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
      <product-cart-button :product="product"></product-cart-button>
      <v-spacer></v-spacer>
      <span class="subheading hidden-md-and-down">$ {{ product.price }}</span>
      <span class="body-2 hidden-lg-and-up">$ {{ product.price }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
  import ProductCartButton from '@/components/product/ProductCartButton'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-cart-button': ProductCartButton
    }
  }
</script>
