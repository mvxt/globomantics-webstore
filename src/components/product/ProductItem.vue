<template>
  <v-card>
    <router-link :to="'/details/' + product._id">
      <v-card-media :src="product.image" alt="" height="200px"></v-card-media>
      <v-card-title primary-title>
        <v-layout row>
          <h3 class="headline mb-0">{{ product.name }}</h3>
          <div>{{ product.description }}</div>
          <v-spacer></v-spacer>
          <div>{{ product.price }}</div>
        </v-layout>
      </v-card-title>
      <v-card-actions>
        <product-button :product="product"></product-button>
      </v-card-actions>
    </router-link>
  </v-card>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>
